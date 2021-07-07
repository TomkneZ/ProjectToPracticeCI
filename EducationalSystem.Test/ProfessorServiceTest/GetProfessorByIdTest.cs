using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using ServiceLayer.ServiceInterfaces;

namespace EducationalSystem.Test.ProfessorServiceTest
{
    [TestClass]
    public class GetProfessorByIdTest
    {
        [TestMethod]
        public void GetProfessorById_ReturnsProfessorWithSameId()
        {
            var serviceMock = new Mock<IProfessorService>();

            const int PROFESSOR_ID = 9;

            serviceMock.Setup(service => service.GetProfessorById(PROFESSOR_ID)).Returns(Mocks.Professor);

            var actualProfessor = serviceMock.Object.GetProfessorById(PROFESSOR_ID);

            Assert.IsTrue(actualProfessor.Id == PROFESSOR_ID);
        }
    }
}
