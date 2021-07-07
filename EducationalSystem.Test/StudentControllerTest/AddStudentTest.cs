using AutoMapper;
using DatabaseStructure.Models;
using EducationalSystem.WebAPI.Controllers;
using EducationalSystem.WebAPI.Exceptions;
using EducationalSystem.WebAPI.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using ServiceLayer.ServiceInterfaces;
using System.Data.Entity.Infrastructure;

namespace EducationalSystem.Test.StudentControllerTest
{
    [TestClass]
    public class AddStudentTest
    {
        private Mock<IMapper> mapperMock = new Mock<IMapper>();
        private Mock<IStudentService> studentServiceMock = new Mock<IStudentService>();
        private Mock<ISchoolService> schoolServiceMock = new Mock<ISchoolService>();
        private StudentsController controller;

        [TestInitialize]
        public void AddStudentTestSetUp()
        {
            this.mapperMock = new Mock<IMapper>();
            this.studentServiceMock = new Mock<IStudentService>();
            this.schoolServiceMock = new Mock<ISchoolService>();
            this.controller = new StudentsController(mapperMock.Object, studentServiceMock.Object, schoolServiceMock.Object);
        }

        [TestMethod]
        public void AddStudent_InputIsInvalidStudentModel_ReturnsUnprocessableEntity()
        {
            const string EXCEPTION_MESSAGE = "Please enter valid phone no.";
            studentServiceMock.Setup(service => service.AddStudent(Mocks.InvalidStudent)).Throws(new InvalidModelStateException(EXCEPTION_MESSAGE));

            var actionResult = controller.AddStudent(Mocks.InvalidStudent);

            Assert.IsInstanceOfType(actionResult.Result, typeof(UnprocessableEntityObjectResult));
        }

        [TestMethod]
        public void AddStudent_InputIsValidStudentModel_ReturnsAddedStudent()
        {
            mapperMock.Setup(mapper => mapper.Map<Student, ActivePersonViewModel>(It.IsAny<Student>())).Returns(Mocks.StudentViewModel);

            var actionResult = controller.AddStudent(Mocks.Student);

            var contentResult = actionResult.Result as OkObjectResult;

            var returnedStudent = contentResult.Value as ActivePersonViewModel;

            Assert.AreEqual(returnedStudent.Id, Mocks.StudentViewModel.Id);
        }

        [TestMethod]
        public void AddStudent_InputIsStudentModelWithInvalidSchoolId_ReturnsBadRequest()
        {
            studentServiceMock.Setup(service => service.AddStudent(Mocks.StudentWithInvalidSchoolId)).Throws(new DbUpdateException());

            var actionResult = controller.AddStudent(Mocks.StudentWithInvalidSchoolId);

            Assert.IsInstanceOfType(actionResult.Result, typeof(BadRequestObjectResult));
        }
    }
}
