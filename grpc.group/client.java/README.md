### Install Dependencies
- cd client.java
- gradle build

### Run the gRPC Client
- gradle run

### Dependencies  
- io.grpc:grpc-netty-shaded: Provides the transport layer for gRPC using Netty.
- io.grpc:grpc-protobuf: Contains gRPC bindings for Protocol Buffers.
- io.grpc:grpc-stub: Provides stubs required for client implementation.
- com.google.protobuf:protobuf-java: The Java Protobuf runtime library.
- protobuf block: Configures the Protobuf compiler (protoc) and adds the grpc-java plugin for generating gRPC code from .proto files.

### References
- [gRPC & Java](https://grpc.io/docs/languages/java/)
- 