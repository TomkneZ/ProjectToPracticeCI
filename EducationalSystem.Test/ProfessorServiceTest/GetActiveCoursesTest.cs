using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using ServiceLayer.ServiceInterfaces;

namespace EducationalSystem.Test.ProfessorServiceTest
{
    [TestClass]
    public class GetActiveCoursesTest
    {
        [TestMethod]
        public void GetActiveCourses_ReturnsActiveCoursesOfGivenProfessor()
        {
            var serviceMock = new Mock<IProfessorService>();

            const int PROFESSOR_ID = 9;

            serviceMock.Setup(service => service.GetActiveCourses(PROFESSOR_ID)).Returns(Mocks.Courses);

            var actualCourses = serviceMock.Object.GetActiveCourses(PROFESSOR_ID);

            Assert.IsTrue(actualCourses[0].ProfessorId == PROFESSOR_ID);
        }
    }
}
