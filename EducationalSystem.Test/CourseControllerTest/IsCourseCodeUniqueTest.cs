using AutoMapper;
using EducationalSystem.WebAPI.Controllers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using ServiceLayer.ServiceInterfaces;

namespace EducationalSystem.Test.CourseControllerTest
{
    [TestClass]
    public class IsCourseCodeUniqueTest
    {
        private Mock<ICourseService> serviceMock;

        private Mock<IMapper> mapperMock;

        private CoursesController controller;

        [TestInitialize]
        public void IsCourseCodeUniqueTestSetUp()
        {
            this.mapperMock = new Mock<IMapper>();
            this.serviceMock = new Mock<ICourseService>();
            this.controller = new CoursesController(mapperMock.Object, serviceMock.Object);
        }

        [TestMethod]
        public void IsCourseCodeUnique_InputIs100_ReturnsFalse()
        {
            const int COURSE_CODE = 100;
            serviceMock.Setup(service => service.IsCodeUnique(COURSE_CODE)).Returns(false);

            var actionResult = controller.IsCourseCodeUnique(COURSE_CODE);
            var contentResult = actionResult.Result as OkObjectResult;

            Assert.IsFalse((bool)contentResult.Value);
        }

        [TestMethod]
        public void IsCourseCodeUnique_InputIs111_ReturnsTrue()
        {
            const int COURSE_CODE = 111;
            serviceMock.Setup(service => service.IsCodeUnique(COURSE_CODE)).Returns(true);

            var actionResult = controller.IsCourseCodeUnique(COURSE_CODE);
            var contentResult = actionResult.Result as OkObjectResult;

            Assert.IsTrue((bool)contentResult.Value);
        }
    }
}
