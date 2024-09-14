const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const path = require('path');

const protoConfig = path.join(__dirname, '../../server.nodejs/src/models/person.proto');
const packageDefinition = protoLoader.loadSync(protoConfig, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
});
const personProto = grpc.loadPackageDefinition(packageDefinition).personservice;

(function main() {
    const client = new personProto.PersonService('localhost:50051', grpc.credentials.createInsecure());

    const newEntity = { name: 'John Doe', age: 30, sex: 'M', address: '123 Main St' };
    // Create a person
    client.create({ person: newEntity }, (err, response) => {
        if (err) throw err;
        console.log('Created Person:', response.person);

        // Get the person by ID
        client.select({ id: response.person.id }, (err, response) => {
            if (err) throw err;
            console.log('Retrieved Person:', response.person);

            // Update the person
            response.person.address = '456 Elm St';
            client.update({ person: response.person }, (err, response) => {
                if (err) throw err;
                console.log('Updated Person:', response.person);

                // Delete the person
                client.remove({ id: response.person.id }, (err, response) => {
                    if (err) throw err;
                    console.log(response.message);
                });
            });
        });
    });
})();
