using Microsoft.EntityFrameworkCore;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using ServiceLayer.ServiceInterfaces;
using System;

namespace EducationalSystem.Test.CourseServiceTest
{
    [TestClass]
    public class DeleteStudentTest
    {
        private Mock<ICourseService> serviceMock;

        [TestInitialize]
        public void DeleteStudentTestSetUp()
        {
            this.serviceMock = new Mock<ICourseService>();
        }

        [DataTestMethod]
        [DataRow(0, 1)]
        [DataRow(1, 0)]
        public void DeleteStudent_InputIsDataRow_ThrowsArgumentNullException(int courseId, int studentId)
        {
            serviceMock.Setup(service => service.DeleteStudent(courseId, studentId)).Throws(new ArgumentNullException());

            Action deleteStudent = delegate
            {
                serviceMock.Object.DeleteStudent(courseId, studentId);
            };

            Assert.ThrowsException<ArgumentNullException>(deleteStudent);
        }

        [DataTestMethod]
        [DataRow(1, 1)]
        [DataRow(2, 2)]
        public void DeleteStudent_InputIsDataRow_ThrowsDbUpdateException(int courseId, int studentId)
        {
            serviceMock.Setup(service => service.DeleteStudent(courseId, studentId)).Throws(new DbUpdateException());

            Action deleteStudent = delegate
            {
                serviceMock.Object.DeleteStudent(courseId, studentId);
            };

            Assert.ThrowsException<DbUpdateException>(deleteStudent);
        }

        [TestMethod]
        public void DeleteStudent_InputIsAnyCourseIdAndStudentId_IsCalled()
        {
            const int COURSE_ID = 1;
            const int STUDENT_ID = 1;

            serviceMock.Object.DeleteStudent(COURSE_ID, STUDENT_ID);
            serviceMock.Verify(service => service.DeleteStudent(It.IsAny<int>(), It.IsAny<int>()));
        }
    }
}
