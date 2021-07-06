using AutoMapper;
using DatabaseStructure.AbstractModels;
using EducationalSystem.WebAPI.ViewModels;

namespace EducationalSystem.WebAPI.Profiles
{
    public class PersonProfile : Profile
    {
        public PersonProfile()
        {
            CreateMap<Person, PersonViewModel>()
              .ForMember("Name", opt => opt.MapFrom(src => $"{src.FirstName} {src.LastName}"));
        }
    }
}
