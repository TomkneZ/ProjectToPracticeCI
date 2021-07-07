using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using ServiceLayer.ServiceInterfaces;

namespace EducationalSystem.Test.StudentServiceTest
{
    [TestClass]
    public class GetActiveStudentsTest
    {
        [TestMethod]
        public void GetActiveStudents_ReturnsActiveStudents()
        {
            var serviceMock = new Mock<IStudentService>();

            serviceMock.Setup(service => service.GetActiveStudents()).Returns(Mocks.Students);

            var actualStudents = serviceMock.Object.GetActiveStudents();

            Assert.IsTrue(actualStudents[0].Id == Mocks.Students[0].Id);
        }
    }
}
