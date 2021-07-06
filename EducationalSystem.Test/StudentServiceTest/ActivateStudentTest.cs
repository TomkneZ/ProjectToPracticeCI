using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using ServiceLayer.ServiceInterfaces;
using System;

namespace EducationalSystem.Test.StudentServiceTest
{
    [TestClass]
    public class ActivateStudentTest
    {
        private Mock<IStudentService> serviceMock;

        [TestInitialize]
        public void AddSchoolTestSetUp()
        {
            this.serviceMock = new Mock<IStudentService>();
        }

        [TestMethod]
        public void ActivateStudent_InputIs0_ThrowsArgumentNullException()
        {
            const int STUDENT_ID = 0;
            serviceMock.Setup(service => service.ActivateStudent(STUDENT_ID)).Throws(new ArgumentNullException());

            Action activateStudent = delegate
            {
                serviceMock.Object.ActivateStudent(STUDENT_ID);
            };

            Assert.ThrowsException<ArgumentNullException>(activateStudent);
        }

        [TestMethod]
        public void ActivateStudent_Input1_ReturnsActivatedStudent()
        {
            const int STUDENT_ID = 1;
            serviceMock.Setup(service => service.ActivateStudent(STUDENT_ID)).Returns(Mocks.ActivatedStudent);

            var actualStudent = serviceMock.Object.ActivateStudent(STUDENT_ID);

            Assert.IsTrue(actualStudent.IsAccountActive);
        }
    }
}
