using DatabaseStructure.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using ServiceLayer.ServiceInterfaces;
using System;

namespace EducationalSystem.Test.ProfessorServiceTest
{
    [TestClass]
    public class EditProfessorTest
    {
        private Mock<IProfessorService> serviceMock;

        [TestInitialize]
        public void EditProfessorTestSetUp()
        {
            this.serviceMock = new Mock<IProfessorService>();
        }

        [TestMethod]
        public void EditProfessor_InputIsNull_ThrowsArgumentNullException()
        {
            serviceMock.Setup(service => service.EditProfessor(null)).Throws(new ArgumentNullException());

            Action editProfessor = delegate
            {
                serviceMock.Object.EditProfessor(null);
            };

            Assert.ThrowsException<ArgumentNullException>(editProfessor);
        }

        [TestMethod]
        public void EditProfessor_InputIsMocksProfessor_ThrowsDbUpdateException()
        {
            serviceMock.Setup(service => service.EditProfessor(Mocks.Professor)).Throws(new DbUpdateException());

            Action editProfessor = delegate
            {
                serviceMock.Object.EditProfessor(Mocks.Professor);
            };

            Assert.ThrowsException<DbUpdateException>(editProfessor);
        }

        [TestMethod]
        public void EditProfessor_InputIsAnyProfessor_IsCalled()
        {
            serviceMock.Object.EditProfessor(Mocks.Professor);
            serviceMock.Verify(service => service.EditProfessor(It.IsAny<Professor>()));
        }
    }
}
