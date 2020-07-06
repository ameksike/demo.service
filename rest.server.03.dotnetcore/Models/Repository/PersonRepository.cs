using System.Collections.Generic;
using System.Linq;
using rest.server._02.dotnetcore.Models.DAO;
using rest.server._02.dotnetcore.Models.DTO;

namespace rest.server._02.dotnetcore.Models.Repository
{
    public class PersonRepository : IPersonRepository
    {
        private PersonContext _context { get; }

        public PersonRepository(PersonContext context)
        {
            _context = context;
        }

        public IEnumerable<PersonModel> GetAll()
        {
            return _context.Persons.ToList();
        }
        public PersonModel GetById(int id)
        {
            return _context.Persons.FirstOrDefault(item => item.Id == id);
        }

        public void Create(PersonModel model)
        {
            if (model == null)
            {
                throw new System.ArgumentNullException(nameof(model));
            }
            _context.Persons.Add(model);
        }

        public bool Save()
        {
            return (_context.SaveChanges() >= 0);
        }

        public void Update(PersonModel model)
        {
            throw new System.NotImplementedException();
        }

        public void Delete(int id)
        {
            throw new System.NotImplementedException();
        }
    }
}