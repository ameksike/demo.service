const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const path = require('path');
const config = require('../../server.nodejs/cfg/config.json');

const protoConfig = path.join(__dirname, '../../server.nodejs', config.service.person.path);
const packageDefinition = protoLoader.loadSync(protoConfig, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
});
const proto = grpc.loadPackageDefinition(packageDefinition);

(function main() {
    const PersonService = proto[config.service.person.package][config.service.person.interface];
    const client = new PersonService(
        `${config.host}:${config.port}`,
        grpc.credentials.createInsecure()
    );

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
