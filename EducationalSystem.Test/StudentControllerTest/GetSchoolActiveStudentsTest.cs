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
    public class GetSchoolActiveStudentsTest
    {
        [TestMethod]
        public void GetSchoolActiveStudents_InputIs1_ReturnsActiveStudentsOfSpecifiedSchool()
        {
            var mapperMock = new Mock<IMapper>();
            var studentServiceMock = new Mock<IStudentService>();
            var schoolServiceMock = new Mock<ISchoolService>();
            var controller = new StudentsController(mapperMock.Object, studentServiceMock.Object, schoolServiceMock.Object);

            const int SCHOOL_ID = 1;

            mapperMock.Setup(mapper => mapper.Map<IEnumerable<Student>, IEnumerable<PersonViewModel>>(It.IsAny<IEnumerable<Student>>())).Returns(Mocks.StudentsViewModel);

            var actionResult = controller.GetSchoolActiveStudents(SCHOOL_ID);

            var contentResult = actionResult.Result as OkObjectResult;

            var returnedStudents = contentResult.Value as List<ActivePersonViewModel>;

            Assert.AreEqual(returnedStudents[0].SchoolId, Mocks.StudentsViewModel[0].SchoolId);

            Assert.IsNotNull(contentResult);
        }
    }
}
