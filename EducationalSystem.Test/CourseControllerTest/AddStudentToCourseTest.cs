using AutoMapper;
using EducationalSystem.WebAPI.Controllers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using ServiceLayer.ServiceInterfaces;
using System;
using System.Data.Entity.Infrastructure;

namespace EducationalSystem.Test.CourseControllerTest
{
    [TestClass]
    public class AddStudentToCourseTest
    {
        private Mock<ICourseService> serviceMock;

        private Mock<IMapper> mapperMock;

        private CoursesController controller;

        [TestInitialize]
        public void AddStudentToCourseTestSetUp()
        {
            this.mapperMock = new Mock<IMapper>();
            this.serviceMock = new Mock<ICourseService>();
            this.controller = new CoursesController(mapperMock.Object, serviceMock.Object);
        }

        [DataTestMethod]
        [DataRow(0, 1)]
        [DataRow(1, 0)]
        public void AddStudentToCourse_InputIsInavalidCourseCodeOrStudentId_ReturnsNotFound(int courseCode, int studentId)
        {
            serviceMock.Setup(service => service.AddStudent(courseCode, studentId)).Throws(new ArgumentNullException());

            var actionResult = controller.AddStudentToCourse(studentId, courseCode);

            Assert.IsInstanceOfType(actionResult, typeof(NotFoundObjectResult));
        }

        [TestMethod]
        public void AddStudentToCourse_InputIsValidCourseCodeAndStudentId_ReturnsOk()
        {
            const int COURSE_CODE = 111;
            const int STUDENT_ID = 1;

            var actionResult = controller.AddStudentToCourse(STUDENT_ID, COURSE_CODE);

            Assert.IsInstanceOfType(actionResult, typeof(OkResult));
        }

        [TestMethod]
        public void AddStudentToCourse_InputIsAlreadyAddedStudentCourse_ReturnsBadRequest()
        {
            const int COURSE_CODE = 111;
            const int STUDENT_ID = 1;

            serviceMock.Setup(service => service.AddStudent(COURSE_CODE, STUDENT_ID)).Throws(new DbUpdateException());

            var actionResult = controller.AddStudentToCourse(STUDENT_ID, COURSE_CODE);

            Assert.IsInstanceOfType(actionResult, typeof(BadRequestObjectResult));
        }
    }
}
