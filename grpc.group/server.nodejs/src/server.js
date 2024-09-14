const path = require('path');
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const SrvPerson = require('./services/person');
const config = require('../cfg/config.json');

// Load .proto file
const packageDefinition = protoLoader.loadSync(path.join(__dirname, './models/person.proto'), {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
});
const packageName = config.service.person.package;
const proto = grpc.loadPackageDefinition(packageDefinition);

// Start the gRPC server
const host = process.env.host || config.host;
const port = process.env.port || config.port;
const server = new grpc.Server();
server.addService(proto[packageName].PersonService.service, new SrvPerson(grpc.status));
server.bindAsync(`${host}:${port}`, grpc.ServerCredentials.createInsecure(), () => {
  console.log(`Server running on port ${port}`);
  server.start();
});