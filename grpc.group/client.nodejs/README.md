# gRPC Client in Node.js

### Imports 
- The configuration is loaded directly from the file using the `@grpc/grpc-js` library
```js
const grpc = require('@grpc/grpc-js');
const protoConfig = path.join(__dirname, '../../server.nodejs', config.service.person.path);
const packageDefinition = protoLoader.loadSync(protoConfig, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
});
```

### Install
- npm init -y
- npm install @grpc/grpc-js @grpc/proto-loader
