using Microsoft.EntityFrameworkCore;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using ServiceLayer.ServiceInterfaces;
using System;

namespace EducationalSystem.Test.SchoolServiceTest
{
    [TestClass]
    public class AddSchoolTest
    {
        private Mock<ISchoolService> serviceMock;

        [TestInitialize]
        public void AddSchoolTestSetUp()
        {
            this.serviceMock = new Mock<ISchoolService>();
        }

        [TestMethod]
        public void AddSchool_InputIsNull_ThrowsArgumentNullException()
        {
            serviceMock.Setup(service => service.AddSchool(null)).Throws(new ArgumentNullException());

            Action addSchool = delegate
            {
                serviceMock.Object.AddSchool(null);
            };

            Assert.ThrowsException<ArgumentNullException>(addSchool);
        }

        [TestMethod]
        public void AddCourse_InputIsHighScholl_ThrowsDbUpdateException()
        {
            const string SCHOOL_NAME = "High School";

            serviceMock.Setup(service => service.AddSchool(SCHOOL_NAME)).Throws(new DbUpdateException());

            Action addSchool = delegate
            {
                serviceMock.Object.AddSchool(SCHOOL_NAME);
            };

            Assert.ThrowsException<DbUpdateException>(addSchool);
        }

        [TestMethod]
        public void AddSchool_InputIsAnySchoolName_IsCalled()
        {
            const string SCHOOL_NAME = "High School";

            serviceMock.Object.AddSchool(SCHOOL_NAME);
            serviceMock.Verify(service => service.AddSchool(It.IsAny<string>()));
        }
    }
}
