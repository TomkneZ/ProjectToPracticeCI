using AutoMapper;
using DatabaseStructure.Models;
using EducationalSystem.WebAPI.Controllers;
using EducationalSystem.WebAPI.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using ServiceLayer.ServiceInterfaces;
using System.Collections.Generic;

namespace EducationalSystem.Test.ProfessorControllerTest
{
    [TestClass]
    public class GetProfessorActiveCoursesTest
    {
        [TestMethod]
        public void GetProfessorActiveCourses_InputIs9_ReturnsActiveCoursesOfSpecifiedProfessor()
        {
            var mapperMock = new Mock<IMapper>();
            var serviceMock = new Mock<IProfessorService>();
            var controller = new ProfessorsController(mapperMock.Object, serviceMock.Object);

            const int PROFESSOR_ID = 9;

            mapperMock.Setup(mapper => mapper.Map<IEnumerable<Course>, List<ActiveProfessorCoursesViewModel>>(It.IsAny<IEnumerable<Course>>())).Returns(Mocks.ProfessorActiveCourses);

            var actionResult = controller.GetProfessorActiveCourses(PROFESSOR_ID);

            var contentResult = actionResult.Result as OkObjectResult;

            var returnedCourses = contentResult.Value as List<ActiveProfessorCoursesViewModel>;

            Assert.AreEqual(returnedCourses[0].UniqueCode, Mocks.ProfessorActiveCourses[0].UniqueCode);
        }
    }
}
