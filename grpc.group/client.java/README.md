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
- [Gradle Installation](https://gradle.org/install/)


### Notes

```
client.java/
├── src/
│   ├── main/
│   │   ├── proto/
│   │   │   └── person.proto
│   │   └── java/
│   └── test/
└── build.gradle
```

```java
import io.grpc.ManagedChannel;
import io.grpc.ManagedChannelBuilder;
import personservice.PersonServiceGrpc;
import personservice.PersonOuterClass.Person;
import personservice.PersonServiceOuterClass.CreatePersonRequest;
import personservice.PersonServiceOuterClass.CreatePersonResponse;

public class GrpcClient {
    public static void main(String[] args) {
        // Create a gRPC channel
        ManagedChannel channel = ManagedChannelBuilder.forAddress("localhost", 50051)
                .usePlaintext()
                .build();

        // Create a blocking stub
        PersonServiceGrpc.PersonServiceBlockingStub stub = PersonServiceGrpc.newBlockingStub(channel);

        // Create a new person request
        Person person = Person.newBuilder()
                .setId("123")
                .setName("John Doe")
                .setAge(30)
                .setSex("M")
                .setAddress("123 Main St")
                .build();

        CreatePersonRequest request = CreatePersonRequest.newBuilder()
                .setPerson(person)
                .build();

        // Call the 'create' method
        CreatePersonResponse response = stub.create(request);

        System.out.println("Created Person: " + response.getPerson().getName());

        // Shutdown the channel
        channel.shutdown();
    }
}
```

You need to ensure that your build.gradle file is configured to include the symbolic link and generate the Java classes correctly. Update your build.gradle file to include the directory containing the symbolic link:

```
plugins {
    id 'java'
    id 'com.google.protobuf' version '0.9.3'
}

repositories {
    mavenCentral()
}

dependencies {
    implementation 'io.grpc:grpc-netty-shaded:1.50.2'
    implementation 'io.grpc:grpc-stub:1.50.2'
    implementation 'io.grpc:grpc-protobuf:1.50.2'
    implementation 'com.google.protobuf:protobuf-java:3.21.12'
    testImplementation 'junit:junit:4.13.2'
}

protobuf {
    protoc {
        artifact = 'com.google.protobuf:protoc:3.21.12'
    }
    generateProtoTasks {
        all().each { task ->
            task.builtins {
                java {
                    option 'lite'
                }
            }
        }
    }
}

sourceSets {
    main {
        java {
            srcDirs += "$buildDir/generated/source/proto/main/java"
        }
    }
}

```