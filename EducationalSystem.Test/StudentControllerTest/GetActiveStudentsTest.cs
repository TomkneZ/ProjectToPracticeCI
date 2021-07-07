using AutoMapper;
using DatabaseStructure.Models;
using EducationalSystem.WebAPI.Controllers;
using EducationalSystem.WebAPI.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using ServiceLayer.ServiceInterfaces;
using System.Collections.Generic;

namespace EducationalSystem.Test.StudentControllerTest
{
    [TestClass]
    public class GetActiveStudentsTest
    {
        [TestMethod]
        public void GetActiveStudents_ReturnsActiveStudents()
        {
            var mapperMock = new Mock<IMapper>();
            var studentServiceMock = new Mock<IStudentService>();
            var schoolServiceMock = new Mock<ISchoolService>();
            var controller = new StudentsController(mapperMock.Object, studentServiceMock.Object, schoolServiceMock.Object);

            mapperMock.Setup(mapper => mapper.Map<IEnumerable<Student>, List<ActivePersonViewModel>>(It.IsAny<IEnumerable<Student>>())).Returns(Mocks.StudentsViewModel);

            var actionResult = controller.GetActiveStudents();

            var contentResult = actionResult.Result as OkObjectResult;

            var returnedStudents = contentResult.Value as List<ActivePersonViewModel>;

            Assert.AreEqual(returnedStudents[0].Id, Mocks.StudentsViewModel[0].Id);

            Assert.IsNotNull(contentResult);
        }
    }
}
