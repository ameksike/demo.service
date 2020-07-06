
## Initial Develoment Steps
- cd D:/dev/
- D:
- dotnet --info
- dotnet new 
- dotnet new webapi -n rest.server.02.dotnetcore
- code -r rest.server.02.dotnetcore
- dotnet run

## DataModel Develoment Steps
- dotnet add package Microsoft.EntityFrameworkCore
- dotnet add package Microsoft.EntityFrameworkCore.Design 
- dotnet add package Microsoft.EntityFrameworkCore.SqlServer 
- dotnet add package Microsoft.EntityFrameworkCore.Sqlite 
- dotnet tool install --global dotnet-ef
- dotnet ef migrations remove
- dotnet ef migrations add InitialMigration
- dotnet ef database update
- dotnet build
- dotnet add package AutoMapper.Extensions.Microsoft.DependencyInjection 


## Use
- GET http://localhost:5000/api/person
- GET http://localhost:5000/api/person/1