const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const uuid = require('uuid');
const database = require('./database');

// Load .proto file
const packageDefinition = protoLoader.loadSync('../protos/person.proto', {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
});
const personProto = grpc.loadPackageDefinition(packageDefinition).personservice;

// Implement CRUD operations

function createPerson(call, callback) {
  const newPerson = { id: uuid.v4(), ...call.request.person };
  database.create(newPerson);
  callback(null, { person: newPerson });
}

function getPerson(call, callback) {
  const person = database.read(call.request.id);
  if (person) {
    callback(null, { person });
  } else {
    callback({ code: grpc.status.NOT_FOUND, details: "Person not found" });
  }
}

function updatePerson(call, callback) {
  const updatedPerson = database.update(call.request.person);
  if (updatedPerson) {
    callback(null, { person: updatedPerson });
  } else {
    callback({ code: grpc.status.NOT_FOUND, details: "Person not found" });
  }
}

function deletePerson(call, callback) {
  const success = database.delete(call.request.id);
  if (success) {
    callback(null, { message: "Person deleted successfully" });
  } else {
    callback({ code: grpc.status.NOT_FOUND, details: "Person not found" });
  }
}

// Start the gRPC server
function startServer() {
  const server = new grpc.Server();
  server.addService(personProto.PersonService.service, {
    CreatePerson: createPerson,
    GetPerson: getPerson,
    UpdatePerson: updatePerson,
    DeletePerson: deletePerson,
  });
  server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
    console.log('Server running on port 50051');
    server.start();
  });
}

startServer();
