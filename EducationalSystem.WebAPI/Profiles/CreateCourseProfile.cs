using AutoMapper;
using DatabaseStructure.Models;
using EducationalSystem.WebAPI.ViewModels;

namespace EducationalSystem.WebAPI.Profiles
{
    public class CreateCourseProfile : Profile
    {
        public CreateCourseProfile()
        {
            CreateMap<Course, CreateCourseViewModel>()
            .ForMember("ProfessorName", opt => opt.MapFrom(src => $"{src.Professor.FirstName} {src.Professor.LastName}"))
            .ForMember("SchoolName", opt => opt.MapFrom(src => src.Professor.School.Name));
        }
    }
}
