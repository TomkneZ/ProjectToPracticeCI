using AutoMapper;
using DatabaseStructure.Models;
using EducationalSystem.WebAPI.ErrorHandlers;
using EducationalSystem.WebAPI.Filters;
using EducationalSystem.WebAPI.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ServiceLayer.ServiceInterfaces;
using System;
using System.Collections.Generic;

namespace EducationalSystem.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [LoggingFilter]
    public class ProfessorsController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly IProfessorService _professorService;

        public ProfessorsController(IMapper mapper, IProfessorService professorService)
        {
            _mapper = mapper;
            _professorService = professorService;
        }

        [HttpGet("{action}/{professorId}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public ActionResult<Professor> GetProfessor(int professorId)
        {
            Func<int, ActivePersonViewModel> getProfessor = delegate (int professorId)
            {
                return _mapper.Map<Professor, ActivePersonViewModel>(_professorService.GetProfessorById(professorId));
            };
            return ErrorHandler.ExecuteAndHandleErrors(this, professorId, getProfessor);
        }

        [HttpGet("{action}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public ActionResult<IEnumerable<Professor>> GetActiveProfessors()
        {
            Func<List<ActivePersonViewModel>> getActiveProfessors = delegate ()
            {
                return _mapper.Map<IEnumerable<Professor>, List<ActivePersonViewModel>>(_professorService.GetActiveProfessors());
            };
            return ErrorHandler.ExecuteAndHandleErrors(this, getActiveProfessors);
        }

        [HttpPut("{action}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [AuthorizationFilter]
        public ActionResult<Professor> EditProfessor([FromBody] Professor professor)
        {
            Func<Professor, PersonViewModel> editProfessor = delegate (Professor professor)
            {
                _professorService.EditProfessor(professor);
                return _mapper.Map<Professor, PersonViewModel>(professor);
            };
            return ErrorHandler.ExecuteAndHandleErrors(this, professor, editProfessor);
        }

        [HttpGet("{action}/{professorId}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public ActionResult<Course> GetProfessorActiveCourses(int professorId)
        {
            Func<int, IEnumerable<ActiveProfessorCoursesViewModel>> getProfessorActiveCourses = delegate (int professorId)
            {
                return _mapper.Map<IEnumerable<Course>, List<ActiveProfessorCoursesViewModel>>(_professorService.GetActiveCourses(professorId));
            };
            return ErrorHandler.ExecuteAndHandleErrors(this, professorId, getProfessorActiveCourses);
        }
    }
}