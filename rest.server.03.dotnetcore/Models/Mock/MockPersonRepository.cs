using System.Collections.Generic;
using rest.server._02.dotnetcore.Models.DTO;
using rest.server._02.dotnetcore.Models.Repository;

namespace rest.server._02.dotnetcore.Models.Mock
{
    public class MockPersonRepository : IPersonRepository
    {
        List<PersonModel> list;
        public MockPersonRepository()
        {
            list = new List<PersonModel>()
            {
                new PersonModel( ) { Id = 0, Name = "Tony Ksike Sa", Age = 15, Sex = "M" },
                new PersonModel( ) { Id = 1, Name = "Mike Ksike Sa", Age = 51, Sex = "M" },
                new PersonModel( ) { Id = 2, Name = "Lisi Ksike Sa", Age = 32, Sex = "F" },
                new PersonModel( ) { Id = 3, Name = "Mary Ksike Sa", Age = 23, Sex = "F" },
                new PersonModel( ) { Id = 4, Name = "Lucy Ksike Sa", Age = 13, Sex = "F" },
            };
        }
        public void Create(PersonModel model)
        {
            list.Add(model);
        }

        public void Delete(int id)
        {
            throw new System.NotImplementedException();
        }

        public IEnumerable<PersonModel> GetAll()
        {
            return list;
        }

        public PersonModel GetById(int id)
        {
            return list.Find(elm => elm.Id == id);
        }

        public bool Save()
        {
            return true;
        }

        public void Update(PersonModel model)
        {
            throw new System.NotImplementedException();
        }
    }
}