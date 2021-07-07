using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using ServiceLayer.ServiceInterfaces;

namespace EducationalSystem.Test.StudentServiceTest
{
    [TestClass]
    public class GetStudentByEmailTest
    {
        [TestMethod]
        public void GetStudentByEmail_ReturnsStudentWithSameEmail()
        {
            var serviceMock = new Mock<IStudentService>();

            const string STUDENT_EMAIL = "allasin@example.com";

            serviceMock.Setup(service => service.GetStudentByEmail(STUDENT_EMAIL)).Returns(Mocks.Student);

            var actualStudent = serviceMock.Object.GetStudentByEmail(STUDENT_EMAIL);

            Assert.IsTrue(actualStudent.Email == STUDENT_EMAIL);
        }
    }
}
