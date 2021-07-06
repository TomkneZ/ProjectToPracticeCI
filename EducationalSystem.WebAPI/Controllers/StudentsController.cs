using AutoMapper;
using DatabaseStructure.Models;
using EducationalSystem.WebAPI.ErrorHandlers;
using EducationalSystem.WebAPI.Exceptions;
using EducationalSystem.WebAPI.Filters;
using EducationalSystem.WebAPI.Helpers;
using EducationalSystem.WebAPI.PollyInfrastructure;
using EducationalSystem.WebAPI.Validators;
using EducationalSystem.WebAPI.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ServiceLayer.ServiceInterfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EducationalSystem.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [LoggingFilter]
    public class StudentsController : ControllerBase
    {
        private readonly IStudentService _studentService;
        private readonly ISchoolService _schoolService;
        private readonly IMapper _mapper;

        public StudentsController(IMapper mapper, IStudentService studentService, ISchoolService schoolService)
        {
            _mapper = mapper;
            _studentService = studentService;
            _schoolService = schoolService;
        }

        [HttpGet("{action}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public ActionResult<IEnumerable<Student>> GetActiveStudents()
        {
            Func<List<ActivePersonViewModel>> getActiveStudents = delegate ()
            {
                return _mapper.Map<IEnumerable<Student>, List<ActivePersonViewModel>>(_studentService.GetActiveStudents());
            };
            return ErrorHandler.ExecuteAndHandleErrors(this, getActiveStudents);
        }

        [HttpGet("{action}/{schoolId}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public ActionResult<Student> GetSchoolActiveStudents(int schoolId)
        {
            Func<int, IEnumerable<PersonViewModel>> getSchoolActiveStudents = delegate (int schoolId)
            {
                return _mapper.Map<IEnumerable<Student>, IEnumerable<PersonViewModel>>(_schoolService.GetActiveStudents(schoolId));
            };
            return ErrorHandler.ExecuteAndHandleErrors(this, schoolId, getSchoolActiveStudents);
        }

        [HttpGet("{action}/{studentEmail}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public ActionResult<Student> GetStudent(string studentEmail)
        {
            Func<string, ActivePersonViewModel> getStudent = delegate (string studentEmail)
            {
                return _mapper.Map<Student, ActivePersonViewModel>(_studentService.GetStudentByEmail(studentEmail));
            };
            return ErrorHandler.ExecuteAndHandleErrors(this, studentEmail, getStudent);
        }

        [HttpPut("{action}/{studentId}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public ActionResult<Student> ActivateStudent(int studentId)
        {
            Func<int, Student> activateStudent = delegate (int studentId)
            {
                return _studentService.ActivateStudent(studentId);
            };
            return ErrorHandler.ExecuteAndHandleErrors(this, studentId, activateStudent);
        }

        [HttpPost("{action}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status422UnprocessableEntity)]
        public ActionResult<Student> AddStudent([FromBody] Student student)
        {
            Func<Student, ActivePersonViewModel> addStudent = delegate (Student student)
            {
                if (!StudentValidator.IsStudentValid(student, ModelState))
                {
                    string messages = string.Join("; ", ModelState.Values
                                        .SelectMany(x => x.Errors)
                                        .Select(x => x.ErrorMessage));
                    throw new InvalidModelStateException(messages);
                }

                _studentService.AddStudent(student);
                SendEmailHelper.SendActivationMessage(student.FirstName, student.LastName, student.Email);
                return _mapper.Map<Student, ActivePersonViewModel>(student);
            };
            return ErrorHandler.ExecuteAndHandleErrors(this, student, addStudent);
        }

        [HttpGet("{action}")]
        public async Task<Student> GetRandomStudentUsingPolicyWrap()
        {
            const int RETRY_COUNT = 5;
            const int TIME_INCREMENTAL_COUNT = 2;
            const int EXCEPTIONS_ALLOWED = 1;
            const int BROKEN_TIME_SECONDS = 10;
            const int TIME_OUT = 10;

            var fallbackPolicy = FallbackRegistry.GetPolicyAsync();
            var waitAndRetryPolicy = WaitAndRetryRegistry.GetPolicyAsync(RETRY_COUNT, TIME_INCREMENTAL_COUNT);
            var breakerPolicy = CircuitBreakerRegistry.GetPolicyAsync(EXCEPTIONS_ALLOWED, BROKEN_TIME_SECONDS);
            var timeoutPolicy = TimeoutRegistry.GetPolicyAsync(TimeSpan.FromMilliseconds(TIME_OUT));
            var policy = fallbackPolicy.WrapAsync(timeoutPolicy).WrapAsync(waitAndRetryPolicy).WrapAsync(breakerPolicy);

            return await policy.ExecuteAsync(async () => _studentService.GetRandomStudent());
        }
    }
}