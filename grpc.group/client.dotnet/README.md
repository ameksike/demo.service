### Install Dependencies
- cd client.dotnet
- dotnet restore
- dotnet build

### Run the gRPC Client
- dotnet run

### Imports 
- The configuration is loaded directly from the `grpc-client.csproj` file 
```xml
<Project Sdk="Microsoft.NET.Sdk">

    <PropertyGroup>
        <OutputType>Exe</OutputType>
        <TargetFramework>net8.0</TargetFramework>
    </PropertyGroup>

    <ItemGroup>
        <PackageReference Include="Grpc.Net.Client" Version="2.47.0" />
        <PackageReference Include="Grpc.Tools" Version="2.47.0" PrivateAssets="All" />
        <PackageReference Include="Google.Protobuf" Version="3.21.12" />
    </ItemGroup>

    <ItemGroup>
        <Protobuf Include="../server.nodejs/src/models/person.proto" GrpcServices="Client" />
    </ItemGroup>

</Project>
```

### Dependencies  
- Grpc.Net.Client: Provides gRPC client functionality.
- Grpc.Tools: Used to compile the .proto files.
- Google.Protobuf: For working with Protocol Buffers.
- Protobuf: Specifies the .proto file to use for code generation with gRPC services set to "Client."

### References
- [Downloading .NET 8.0 SDK (v8.0.401)](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/sdk-8.0.401-windows-x64-installer)
- [gRPC & C# / .NET](https://grpc.io/docs/languages/csharp/)
- [Introducción a gRPC en .NET](https://learn.microsoft.com/es-es/aspnet/core/grpc/?view=aspnetcore-8.0)

### Notes
- Use Correct Method Names in the Client Code: Instead of using Create, you need to use the camelCase version of the method names as generated from the .proto file. For example:

```
create → createAsync (asynchronous method)
select → selectAsync
update → updateAsync
remove → removeAsync
```

Let's assume you're calling the create method in your client code. Instead of client.Create, you should use client.createAsync. Here’s an example of what the corrected code might look like in your Program.cs:

```csharp
using Grpc.Net.Client;
using PersonService;  // Adjust this to the namespace generated from your .proto

class Program
{
    static async Task Main(string[] args)
    {
        // Create gRPC channel
        using var channel = GrpcChannel.ForAddress("https://localhost:50051");

        // Create a new client
        var client = new PersonService.PersonServiceClient(channel);

        // Create a new person request
        var personRequest = new CreatePersonRequest
        {
            Person = new Person
            {
                Id = "123",
                Name = "John Doe",
                Age = 30,
                Sex = "M",
                Address = "123 Main St"
            }
        };

        // Call the 'createAsync' method
        var response = await client.createAsync(personRequest);

        // Output the response
        Console.WriteLine($"Created Person: {response.Person.Name}");
    }
}
```

Things to Check:
1. Method Naming: The .proto methods like create, select, update, and remove are likely generated as camelCase. In .NET, the gRPC tooling will typically append Async to the method names to reflect that they are asynchronous.
2. Generated Code Namespace: Ensure that you are using the correct namespace for the generated gRPC client code. The namespace for the generated client is based on the package in your .proto file. In this case, the package is personservice, so your using directive should be something like `using PersonService;`or the namespace generated from your .proto file.


### Config as JSON
Add JSON File Reading Code in Program.cs:

```csharp
using System.Text.Json;
using System.IO;

public class PersonData
{
    public string Name { get; set; }
    public int Age { get; set; }
    public string Sex { get; set; }
    public string Address { get; set; }
}
// Read the JSON file
string jsonFilePath = Path.Combine(Directory.GetParent(Directory.GetCurrentDirectory()).FullName, "person-service", "data.json");
string jsonData = File.ReadAllText(jsonFilePath);
PersonData personData = JsonSerializer.Deserialize<PersonData>(jsonData);
```

- PersonData class is defined to map the structure of the JSON file.
- `JsonSerializer.Deserialize<PersonData>(jsonData)` reads and deserializes the JSON into the PersonData object.
- The deserialized data is used to populate a CreatePersonRequest, which is then sent to the gRPC server.