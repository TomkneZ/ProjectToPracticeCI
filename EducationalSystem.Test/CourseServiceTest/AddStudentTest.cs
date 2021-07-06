using Microsoft.EntityFrameworkCore;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using ServiceLayer.ServiceInterfaces;
using System;

namespace EducationalSystem.Test.CourseServiceTest
{
    [TestClass]
    public class AddStudentTest
    {
        private Mock<ICourseService> serviceMock;

        [TestInitialize]
        public void AddStudentTestSetUp()
        {
            this.serviceMock = new Mock<ICourseService>();
        }

        [DataTestMethod]
        [DataRow(0, 1)]
        [DataRow(1, 0)]
        public void AddStudent_InputIsDataRow_ThrowsArgumentNullException(int courseCode, int studentId)
        {
            serviceMock.Setup(service => service.AddStudent(courseCode, studentId)).Throws(new ArgumentNullException());

            Action addStudent = delegate
            {
                serviceMock.Object.AddStudent(courseCode, studentId);
            };

            Assert.ThrowsException<ArgumentNullException>(addStudent);
        }

        [DataTestMethod]
        [DataRow(1, 1)]
        [DataRow(2, 2)]
        public void AddStudent_InputIsDataRow_ThrowsDbUpdateException(int courseCode, int studentId)
        {
            serviceMock.Setup(service => service.AddStudent(courseCode, studentId)).Throws(new DbUpdateException());

            Action addStudent = delegate
            {
                serviceMock.Object.AddStudent(courseCode, studentId);
            };

            Assert.ThrowsException<DbUpdateException>(addStudent);
        }

        [TestMethod]
        public void AddStudent_InputIsAnyCourseCodeAndStudentId_IsCalled()
        {
            const int COURSE_CODE = 1;
            const int STUDENT_ID = 1;

            serviceMock.Object.AddStudent(COURSE_CODE, STUDENT_ID);
            serviceMock.Verify(service => service.AddStudent(It.IsAny<int>(), It.IsAny<int>()));
        }
    }
}
