using AutoMapper;
using rest.server._02.dotnetcore.Models.DTO;

namespace rest.server._02.dotnetcore.Models.Profiles
{
    public class PersonProfile : Profile
    {
        public PersonProfile()
        {
            CreateMap<PersonModel, PersonDTO>();
            CreateMap<PersonDTO, PersonModel>();
        }
    }
}