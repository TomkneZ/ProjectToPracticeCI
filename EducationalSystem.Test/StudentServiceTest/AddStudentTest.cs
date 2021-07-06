using DatabaseStructure.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using ServiceLayer.ServiceInterfaces;
using System;

namespace EducationalSystem.Test.StudentServiceTest
{
    [TestClass]
    public class AddStudentTest
    {
        private Mock<IStudentService> serviceMock;

        [TestInitialize]
        public void AddSchoolTestSetUp()
        {
            this.serviceMock = new Mock<IStudentService>();
        }

        [TestMethod]
        public void AddStudent_InputIsNull_ThrowsArgumentNullException()
        {
            serviceMock.Setup(service => service.AddStudent(null)).Throws(new ArgumentNullException());

            Action addStudent = delegate
            {
                serviceMock.Object.AddStudent(null);
            };

            Assert.ThrowsException<ArgumentNullException>(addStudent);
        }

        [TestMethod]
        public void AddStudent_InputIsMocksStudent_ThrowsDbUpdateException()
        {
            serviceMock.Setup(service => service.AddStudent(Mocks.Student)).Throws(new DbUpdateException());

            Action addStudent = delegate
            {
                serviceMock.Object.AddStudent(Mocks.Student);
            };

            Assert.ThrowsException<DbUpdateException>(addStudent);
        }

        [TestMethod]
        public void AddStudent_InputIsAnyStudent_IsCalled()
        {
            serviceMock.Object.AddStudent(Mocks.Student);
            serviceMock.Verify(service => service.AddStudent(It.IsAny<Student>()));
        }
    }
}
