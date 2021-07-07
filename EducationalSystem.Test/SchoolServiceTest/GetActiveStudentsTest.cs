using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using ServiceLayer.ServiceInterfaces;

namespace EducationalSystem.Test.SchoolServiceTest
{
    [TestClass]
    public class GetActiveStudentsTest
    {
        [TestMethod]
        public void GetActiveStudents_ReturnsActiveStudentsOfGivenSchool()
        {
            var serviceMock = new Mock<ISchoolService>();

            const int SCHOOL_ID = 1;

            serviceMock.Setup(service => service.GetActiveStudents(SCHOOL_ID)).Returns(Mocks.Students);

            var actualStudents = serviceMock.Object.GetActiveStudents(SCHOOL_ID);

            Assert.IsTrue(actualStudents[0].SchoolId == SCHOOL_ID);
        }
    }
}
