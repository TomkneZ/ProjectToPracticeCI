using AutoMapper;
using DatabaseStructure;
using DatabaseStructure.Models;
using EducationalSystem.WebAPI.ViewModels;

namespace EducationalSystem.WebAPI.Profiles
{
    public class ActivePersonProfile : Profile
    {
        DBContext db;
        public ActivePersonProfile()
        {
            CreateMap<Student, ActivePersonViewModel>()
                .ForMember("Name", opt => opt.MapFrom(src => $"{src.FirstName} {src.LastName}"))
                .ForMember("SchoolName", opt => opt.MapFrom(src => "No " + src.SchoolId));

            CreateMap<Professor, ActivePersonViewModel>()
                .ForMember("Name", opt => opt.MapFrom(src => $"{src.FirstName} {src.LastName}"))
                .ForMember("SchoolName", opt => opt.MapFrom(src => "No " + src.SchoolId));
        }
    }
}