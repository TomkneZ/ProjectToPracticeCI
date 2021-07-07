using DatabaseStructure.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using ServiceLayer.ServiceInterfaces;
using System;

namespace EducationalSystem.Test.CourseServiceTest
{
    [TestClass]
    public class AddCourseTest
    {
        private Mock<ICourseService> serviceMock;

        [TestInitialize]
        public void AddCourseTestSetUp()
        {
            this.serviceMock = new Mock<ICourseService>();
        }

        [TestMethod]
        public void AddCourse_InputIsNull_ThrowsArgumentNullException()
        {
            serviceMock.Setup(service => service.AddCourse(null)).Throws(new ArgumentNullException());

            Action addCourse = delegate
            {
                serviceMock.Object.AddCourse(null);
            };

            Assert.ThrowsException<ArgumentNullException>(addCourse);
        }

        [TestMethod]
        public void AddCourse_InputIsMocksCourse_ThrowsDbUpdateException()
        {
            serviceMock.Setup(service => service.AddCourse(Mocks.Course)).Throws(new DbUpdateException());

            Action addCourse = delegate
            {
                serviceMock.Object.AddCourse(Mocks.Course);
            };

            Assert.ThrowsException<DbUpdateException>(addCourse);
        }

        [TestMethod]
        public void AddCourse_InputIsAnyCourse_IsCalled()
        {
            serviceMock.Object.AddCourse(Mocks.Course);
            serviceMock.Verify(service => service.AddCourse(It.IsAny<Course>()));
        }
    }
}
