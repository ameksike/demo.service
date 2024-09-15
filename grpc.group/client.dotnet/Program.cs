using System;
using System.IO;
using System.Threading.Tasks;  // For the Task type
using Grpc.Net.Client;  // For GrpcChannel and Client
using Google.Protobuf.WellKnownTypes;  // For protobuf types
using Personservice; // Assuming Person namespace is generated from .proto file

namespace GrpcClient
{
    class Program
    {
        static async Task Main(string[] args)
        {
            var channel = GrpcChannel.ForAddress("http://localhost:50051");
            var client = new PersonService.PersonServiceClient(channel);

            // Create a person
            var person = new Person { Name = "John Doe", Age = 30, Sex = "M", Address = "123 Main St" };
            var createResponse = await client.createAsync(new CreatePersonRequest { Person = person });
            Console.WriteLine($"Created: {createResponse.Person}");

            // Get the person by ID
            var getResponse = await client.selectAsync(new GetPersonRequest { Id = createResponse.Person.Id });
            Console.WriteLine($"Retrieved: {getResponse.Person}");

            // Update the person
            getResponse.Person.Address = "456 Elm St";
            var updateResponse = await client.updateAsync(new UpdatePersonRequest { Person = getResponse.Person });
            Console.WriteLine($"Updated: {updateResponse.Person}");

            // Delete the person
            var deleteResponse = await client.removeAsync(new DeletePersonRequest { Id = updateResponse.Person.Id });
            Console.WriteLine(deleteResponse.Message);
        }
    }
}
