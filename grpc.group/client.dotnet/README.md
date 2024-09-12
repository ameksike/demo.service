### Install Dependencies
- cd dotnet-client
- dotnet restore

### Run the gRPC Client
- dotnet run

### Dependencies  
- Grpc.Net.Client: Provides gRPC client functionality.
- Grpc.Tools: Used to compile the .proto files.
- Google.Protobuf: For working with Protocol Buffers.
- Protobuf: Specifies the .proto file to use for code generation with gRPC services set to "Client."