using AutoMapper;
using DatabaseStructure.Models;
using EducationalSystem.WebAPI.ErrorHandlers;
using EducationalSystem.WebAPI.Exceptions;
using EducationalSystem.WebAPI.Filters;
using EducationalSystem.WebAPI.Validators;
using EducationalSystem.WebAPI.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ServiceLayer.ServiceInterfaces;
using System;
using System.Collections.Generic;
using System.Linq;

namespace EducationalSystem.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [LoggingFilter]
    public class CoursesController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly ICourseService _courseService;

        public CoursesController(IMapper mapper, ICourseService courseService)
        {
            _mapper = mapper;
            _courseService = courseService;
        }

        [HttpPost("{action}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status422UnprocessableEntity)]
        public ActionResult<Course> AddCourse([FromBody] Course course)
        {
            Func<Course, CreateCourseViewModel> addCourse = delegate (Course course)
            {
                if (!CourseValidator.IsCourseValid(course, ModelState))
                {
                    string messages = string.Join("\n", ModelState.Values
                                        .SelectMany(x => x.Errors)
                                        .Select(x => x.ErrorMessage));
                    throw new InvalidModelStateException(messages);
                }
                _courseService.AddCourse(course);
                return _mapper.Map<Course, CreateCourseViewModel>(course);
            };
            return ErrorHandler.ExecuteAndHandleErrors(this, course, addCourse);
        }

        [HttpPost("{action}/{studentId}/{courseCode}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public ActionResult AddStudentToCourse(int studentId, int courseCode)
        {
            Action<int, int> addStudentToCourse = delegate (int studentId, int courseCode)
            {
                _courseService.AddStudent(courseCode, studentId);
            };
            return ErrorHandler.ExecuteAndHandleErrors(this, studentId, courseCode, addStudentToCourse);
        }

        [HttpGet("{action}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public ActionResult<IEnumerable<Course>> GetActiveCourses()
        {
            Func<List<ActiveProfessorCoursesViewModel>> getActiveCourses = delegate ()
            {
                return _mapper.Map<IEnumerable<Course>, List<ActiveProfessorCoursesViewModel>>(_courseService.GetActiveCourses());
            };
            return ErrorHandler.ExecuteAndHandleErrors(this, getActiveCourses);
        }

        [HttpDelete("{action}/{studentId}/{courseId}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public ActionResult DeleteStudentFromCourse(int courseId, int studentId)
        {
            Action<int, int> deleteStudentFromCourse = delegate (int courseId, int studentId)
            {
                _courseService.DeleteStudent(courseId, studentId);
            };
            return ErrorHandler.ExecuteAndHandleErrors(this, courseId, studentId, deleteStudentFromCourse);
        }

        [HttpGet("{action}/{code}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public ActionResult<bool> IsCourseCodeUnique(int code)
        {
            Func<int, bool> isCourseCodeUnique = delegate (int code)
            {
                return _courseService.IsCodeUnique(code);
            };
            return ErrorHandler.ExecuteAndHandleErrors(this, code, isCourseCodeUnique);
        }
    }
}