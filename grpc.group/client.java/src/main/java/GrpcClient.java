package src.main.java;
import io.grpc.ManagedChannel;
import io.grpc.ManagedChannelBuilder;
import personservice.PersonServiceGrpc;
import personservice.PersonOuterClass.*;

public class GrpcClient {
    public static void main(String[] args) throws Exception {
        ManagedChannel channel = ManagedChannelBuilder.forAddress("localhost", 50051)
            .usePlaintext()
            .build();

        PersonServiceGrpc.PersonServiceBlockingStub stub = PersonServiceGrpc.newBlockingStub(channel);

        // Create a person
        Person person = Person.newBuilder()
            .setName("John Doe")
            .setAge(30)
            .setSex("M")
            .setAddress("123 Main St")
            .build();

        CreatePersonResponse createResponse = stub.create(CreatePersonRequest.newBuilder().setPerson(person).build());
        System.out.println("Created: " + createResponse.getPerson());

        // Get the person by ID
        GetPersonResponse getResponse = stub.select(GetPersonRequest.newBuilder().setId(createResponse.getPerson().getId()).build());
        System.out.println("Retrieved: " + getResponse.getPerson());

        // Update the person
        Person updatedPerson = getResponse.getPerson().toBuilder().setAddress("456 Elm St").build();
        UpdatePersonResponse updateResponse = stub.update(UpdatePersonRequest.newBuilder().setPerson(updatedPerson).build());
        System.out.println("Updated: " + updateResponse.getPerson());

        // Delete the person
        DeletePersonResponse deleteResponse = stub.remove(DeletePersonRequest.newBuilder().setId(updateResponse.getPerson().getId()).build());
        System.out.println(deleteResponse.getMessage());

        channel.shutdown();
    }
}
