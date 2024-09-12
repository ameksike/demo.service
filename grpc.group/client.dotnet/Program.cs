using System;
using Grpc.Net.Client;
using PersonService;

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
            var createResponse = await client.CreatePersonAsync(new CreatePersonRequest { Person = person });
            Console.WriteLine($"Created: {createResponse.Person}");

            // Get the person by ID
            var getResponse = await client.GetPersonAsync(new GetPersonRequest { Id = createResponse.Person.Id });
            Console.WriteLine($"Retrieved: {getResponse.Person}");

            // Update the person
            getResponse.Person.Address = "456 Elm St";
            var updateResponse = await client.UpdatePersonAsync(new UpdatePersonRequest { Person = getResponse.Person });
            Console.WriteLine($"Updated: {updateResponse.Person}");

            // Delete the person
            var deleteResponse = await client.DeletePersonAsync(new DeletePersonRequest { Id = updateResponse.Person.Id });
            Console.WriteLine(deleteResponse.Message);
        }
    }
}
