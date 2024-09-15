### Install Dependencies
- cd client.dotnet
- dotnet restore
- dotnet build

### Run the gRPC Client
- dotnet run

### Dependencies  
- Grpc.Net.Client: Provides gRPC client functionality.
- Grpc.Tools: Used to compile the .proto files.
- Google.Protobuf: For working with Protocol Buffers.
- Protobuf: Specifies the .proto file to use for code generation with gRPC services set to "Client."

### References
- [Downloading .NET 8.0 SDK (v8.0.401)](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/sdk-8.0.401-windows-x64-installer)
- [gRPC & C# / .NET](https://grpc.io/docs/languages/csharp/)
- [Introducción a gRPC en .NET](https://learn.microsoft.com/es-es/aspnet/core/grpc/?view=aspnetcore-8.0)