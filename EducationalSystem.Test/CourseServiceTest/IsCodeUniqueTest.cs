using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using ServiceLayer.ServiceInterfaces;

namespace EducationalSystem.Test.CourseServiceTest
{
    [TestClass]
    public class IsCodeUniqueTest
    {

        private Mock<ICourseService> serviceMock;

        [TestInitialize]
        public void IsCodeUniqueTestSetUp()
        {
            this.serviceMock = new Mock<ICourseService>();
        }

        [TestMethod]
        public void IsCodeUnique_InputIs100_ReturnsTrue()
        {
            const int UNIQUE_CODE = 100;

            serviceMock.Setup(service => service.IsCodeUnique(UNIQUE_CODE)).Returns(true);

            var actualResult = serviceMock.Object.IsCodeUnique(UNIQUE_CODE);

            Assert.IsTrue(actualResult);
        }

        [TestMethod]
        public void IsCodeUnique_InputIs101_ReturnsFalse()
        {
            const int UNIQUE_CODE = 101;

            serviceMock.Setup(service => service.IsCodeUnique(UNIQUE_CODE)).Returns(false);

            var actualResult = serviceMock.Object.IsCodeUnique(UNIQUE_CODE);

            Assert.IsFalse(actualResult);
        }
    }
}
