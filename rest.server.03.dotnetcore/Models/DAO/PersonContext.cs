using Microsoft.EntityFrameworkCore;
using rest.server._02.dotnetcore.Models.DTO;

namespace rest.server._02.dotnetcore.Models.DAO
{
    public class PersonContext : DbContext
    {
        public PersonContext(DbContextOptions<PersonContext> opt) : base(opt)
        {
            
        } 

        public DbSet<PersonModel> Persons { get; set; }
    }
}