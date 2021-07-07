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

namespace EducationalSystem.Test.CourseControllerTest
{
    [TestClass]
    public class AddCourseTest
    {
        private Mock<ICourseService> serviceMock;

        private Mock<IMapper> mapperMock;

        private CoursesController controller;

        [TestInitialize]
        public void AddCourseTestSetUp()
        {
            this.mapperMock = new Mock<IMapper>();
            this.serviceMock = new Mock<ICourseService>();
            this.controller = new CoursesController(mapperMock.Object, serviceMock.Object);
        }

        [TestMethod]
        public void AddCourse_InputIsInvalidCourseModel_ReturnsUnprocessableEntity()
        {
            const string EXCEPTION_MESSAGE = "UniqueCode should be from 99 to 999";
            serviceMock.Setup(service => service.AddCourse(Mocks.InvalidCourse)).Throws(new InvalidModelStateException(EXCEPTION_MESSAGE));

            var actionResult = controller.AddCourse(Mocks.InvalidCourse);

            Assert.IsInstanceOfType(actionResult.Result, typeof(UnprocessableEntityObjectResult));
        }

        [TestMethod]
        public void AddCourse_InputIsValidCourseModel_ReturnsAddedCourse()
        {
            mapperMock.Setup(mapper => mapper.Map<Course, CreateCourseViewModel>(It.IsAny<Course>())).Returns(Mocks.CourseViewModel);

            var actionResult = controller.AddCourse(Mocks.Course);

            var contentResult = actionResult.Result as OkObjectResult;

            var returnedCourse = contentResult.Value as CreateCourseViewModel;

            Assert.AreEqual(returnedCourse.Name, Mocks.CourseViewModel.Name);
        }

        [TestMethod]
        public void AddCourse_InputIsCourseModelWithInvalidProfessorId_ReturnsBadRequest()
        {
            serviceMock.Setup(service => service.AddCourse(Mocks.CourseWithInvalidProfessorId)).Throws(new DbUpdateException());

            var actionResult = controller.AddCourse(Mocks.CourseWithInvalidProfessorId);

            Assert.IsInstanceOfType(actionResult.Result, typeof(BadRequestObjectResult));
        }
    }
}
