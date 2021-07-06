using AutoMapper;
using DatabaseStructure.Models;
using EducationalSystem.WebAPI.Controllers;
using EducationalSystem.WebAPI.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using ServiceLayer.ServiceInterfaces;

namespace EducationalSystem.Test.StudentControllerTest
{
    [TestClass]
    public class GetStudentTest
    {
        [TestMethod]
        public void GetStudent_InputIsValidEmail_ReturnsStudentWithSpecifiedEmail()
        {
            var mapperMock = new Mock<IMapper>();
            var studentServiceMock = new Mock<IStudentService>();
            var schoolServiceMock = new Mock<ISchoolService>();
            var controller = new StudentsController(mapperMock.Object, studentServiceMock.Object, schoolServiceMock.Object);

            const string STUDENT_EMAIL = "allasin@example.com";

            mapperMock.Setup(mapper => mapper.Map<Student, ActivePersonViewModel>(It.IsAny<Student>())).Returns(Mocks.StudentViewModel);

            var actionResult = controller.GetStudent(STUDENT_EMAIL);

            var contentResult = actionResult.Result as OkObjectResult;

            var returnedStudent = contentResult.Value as ActivePersonViewModel;

            Assert.AreEqual(returnedStudent.Email, STUDENT_EMAIL);
        }
    }
}
