using System.Collections.Generic;
using rest.server._02.dotnetcore.Models.DTO;

namespace rest.server._02.dotnetcore.Models.Repository
{
    public interface IPersonRepository
    {
        IEnumerable<PersonModel> GetAll();
        PersonModel GetById(int id);
        void Create(PersonModel model);
        void Update(PersonModel model);
        void Delete(int id);
        bool Save();
    }
}