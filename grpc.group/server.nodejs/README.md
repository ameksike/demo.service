## gRPC Server in Node.js

- npm init -y
- npm install @grpc/grpc-js @grpc/proto-loader

### Build and Run the gRPC Server in Docker
- cd server.nodejs
- docker build -t server.nodejs .
- docker run -p 50051:50051 server.nodejs
