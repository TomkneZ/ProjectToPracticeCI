using AutoMapper;
using DatabaseStructure.Models;
using EducationalSystem.WebAPI.ViewModels;

namespace EducationalSystem.WebAPI.Profiles
{
    public class ActiveProfessorCoursesProfile : Profile
    {
        public ActiveProfessorCoursesProfile()
        {
            CreateMap<Course, ActiveProfessorCoursesViewModel>();
        }
    }
}
