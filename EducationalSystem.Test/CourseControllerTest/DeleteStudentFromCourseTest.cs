using AutoMapper;
using EducationalSystem.WebAPI.Controllers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using ServiceLayer.ServiceInterfaces;
using System;

namespace EducationalSystem.Test.CourseControllerTest
{
    [TestClass]
    public class DeleteStudentFromCourseTest
    {
        private Mock<ICourseService> serviceMock;

        private Mock<IMapper> mapperMock;

        private CoursesController controller;

        [TestInitialize]
        public void DeleteStudentFromCourseTestSetUp()
        {
            this.mapperMock = new Mock<IMapper>();
            this.serviceMock = new Mock<ICourseService>();
            this.controller = new CoursesController(mapperMock.Object, serviceMock.Object);
        }

        [TestMethod]
        public void DeleteStudentFromCourse_InputIsValidCourseIdAndStudentId_ReturnsOk()
        {
            const int COURSE_ID = 1;
            const int STUDENT_ID = 1;

            var actionResult = controller.DeleteStudentFromCourse(COURSE_ID, STUDENT_ID);

            Assert.IsInstanceOfType(actionResult, typeof(OkResult));
        }

        [DataTestMethod]
        [DataRow(0, 1)]
        [DataRow(1, 0)]
        public void DeleteStudentFromCourse_InputIsInvalidCourseIdOrStudentId_ReturnsNotFound(int courseId, int studentId)
        {
            serviceMock.Setup(service => service.DeleteStudent(courseId, studentId)).Throws(new ArgumentNullException());

            var actionResult = controller.DeleteStudentFromCourse(courseId, studentId);

            Assert.IsInstanceOfType(actionResult, typeof(NotFoundObjectResult));
        }
    }
}
