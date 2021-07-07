using AutoMapper;
using DatabaseStructure.Models;
using EducationalSystem.WebAPI.Controllers;
using EducationalSystem.WebAPI.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using ServiceLayer.ServiceInterfaces;
using System.Collections.Generic;

namespace EducationalSystem.Test.CourseControllerTest
{
    [TestClass]
    public class GetActiveCoursesTest
    {
        [TestMethod]
        public void GetActiveCourses_ReturnsActiveCourses()
        {
            var mapperMock = new Mock<IMapper>();
            var serviceMock = new Mock<ICourseService>();
            var controller = new CoursesController(mapperMock.Object, serviceMock.Object);

            mapperMock.Setup(mapper => mapper.Map<IEnumerable<Course>, List<ActiveProfessorCoursesViewModel>>(It.IsAny<IEnumerable<Course>>())).Returns(Mocks.ProfessorActiveCourses);

            var actionResult = controller.GetActiveCourses();

            var contentResult = actionResult.Result as OkObjectResult;

            var returnedCourses = contentResult.Value as List<ActiveProfessorCoursesViewModel>;

            Assert.AreEqual(returnedCourses[0].UniqueCode, Mocks.ProfessorActiveCourses[0].UniqueCode);
        }
    }
}
