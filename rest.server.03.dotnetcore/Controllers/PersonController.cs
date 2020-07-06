using System.Collections.Generic;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using rest.server._02.dotnetcore.Models.DTO;
using rest.server._02.dotnetcore.Models.Repository;

namespace rest.server._02.dotnetcore.Controllers
{
    [Route("api/person")]
    [ApiController]
    public class PersonController : ControllerBase
    {
        private readonly IPersonRepository _repository;
        private readonly IMapper _mapper;

        public PersonController(IPersonRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        //GET   api/person  
        [HttpGet]
        public ActionResult<IEnumerable<PersonDTO>> GetAll()
        {
            var items = _repository.GetAll();
            var dto = _mapper.Map<IEnumerable<PersonDTO>>(items);
            return Ok(dto);
        }

        //GET   api/person/{id}
        [HttpGet("{id}", Name="GetById")]
        public ActionResult<PersonDTO> GetById(int id)
        {
            var items = _repository.GetById(id);
            var dto = _mapper.Map<PersonDTO>(items);

            if (items != null)
            {
                return Ok(dto);
            }
            return NotFound();
        }

        //POST   api/person/{id}
        [HttpPost]
        public ActionResult<PersonDTO> Create(PersonDTO dto)
        {
            var model = _mapper.Map<PersonModel>(dto);
            _repository.Create(model);
            _repository.Save();
            var dtout = _mapper.Map<PersonDTO>(model);
            return CreatedAtRoute(nameof(GetById), new {Id = dtout.Id}, dtout);
        }
    }
}