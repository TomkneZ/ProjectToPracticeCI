using AutoMapper;
using DatabaseStructure.Models;
using EducationalSystem.WebAPI.Controllers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using ServiceLayer.ServiceInterfaces;
using System;

namespace EducationalSystem.Test.StudentControllerTest
{
    [TestClass]
    public class ActivateStudentTest
    {
        private Mock<IMapper> mapperMock = new Mock<IMapper>();
        private Mock<IStudentService> studentServiceMock = new Mock<IStudentService>();
        private Mock<ISchoolService> schoolServiceMock = new Mock<ISchoolService>();
        private StudentsController controller;

        [TestInitialize]
        public void ActivateStudentTestSetUp()
        {
            this.mapperMock = new Mock<IMapper>();
            this.studentServiceMock = new Mock<IStudentService>();
            this.schoolServiceMock = new Mock<ISchoolService>();
            this.controller = new StudentsController(mapperMock.Object, studentServiceMock.Object, schoolServiceMock.Object);
        }

        [TestMethod]
        public void ActivateStudent_InputIsNonexistingStudentId_ReturnsNotFound()
        {
            const int STUDENT_ID = 0;
            studentServiceMock.Setup(service => service.ActivateStudent(STUDENT_ID)).Throws(new ArgumentNullException());

            var actionResult = controller.ActivateStudent(STUDENT_ID);

            Assert.IsInstanceOfType(actionResult.Result, typeof(NotFoundObjectResult));
        }

        [TestMethod]
        public void ActivateStudent_InputIsExistingStudentId_ReturnsActivatedStudent()
        {
            const int STUDENT_ID = 1;

            studentServiceMock.Setup(service => service.ActivateStudent(STUDENT_ID)).Returns(Mocks.ActivatedStudent);

            var actionResult = controller.ActivateStudent(STUDENT_ID);
            var contentResult = actionResult.Result as OkObjectResult;
            var returnedStudent = contentResult.Value as Student;

            Assert.IsTrue(returnedStudent.IsAccountActive);
        }
    }
}
