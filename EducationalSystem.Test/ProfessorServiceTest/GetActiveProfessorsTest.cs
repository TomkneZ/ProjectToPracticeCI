using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using ServiceLayer.ServiceInterfaces;

namespace EducationalSystem.Test.ProfessorServiceTest
{
    [TestClass]
    public class GetActiveProfessorsTest
    {
        [TestMethod]
        public void GetActiveProfessors_ReturnsActiveProfessors()
        {
            var serviceMock = new Mock<IProfessorService>();

            serviceMock.Setup(service => service.GetActiveProfessors()).Returns(Mocks.Professors);

            var actualProfessors = serviceMock.Object.GetActiveProfessors();

            Assert.IsTrue(actualProfessors[0].Id == Mocks.Professors[0].Id);
        }
    }
}
