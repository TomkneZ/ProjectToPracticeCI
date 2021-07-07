using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using ServiceLayer.ServiceInterfaces;

namespace EducationalSystem.Test.CourseServiceTest
{
    [TestClass]
    public class GetActiveCoursesTest
    {
        [TestMethod]
        public void GetActiveCourses_ReturnsActiveCourses()
        {
            var serviceMock = new Mock<ICourseService>();

            serviceMock.Setup(service => service.GetActiveCourses()).Returns(Mocks.Courses);

            var actualCourses = serviceMock.Object.GetActiveCourses();

            Assert.IsTrue(actualCourses[0].UniqueCode == Mocks.Courses[0].UniqueCode);
        }
    }
}
