using AutoMapper;
using DatabaseStructure.Models;
using EducationalSystem.WebAPI.Controllers;
using EducationalSystem.WebAPI.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using ServiceLayer.ServiceInterfaces;
using System;

namespace EducationalSystem.Test.ProfessorControllerTest
{
    [TestClass]
    public class EditProfessorTest
    {
        private Mock<IProfessorService> serviceMock;

        private Mock<IMapper> mapperMock;

        private ProfessorsController controller;

        [TestInitialize]
        public void EditProfessorTestSetUp()
        {
            this.mapperMock = new Mock<IMapper>();
            this.serviceMock = new Mock<IProfessorService>();
            this.controller = new ProfessorsController(mapperMock.Object, serviceMock.Object);
        }

        [TestMethod]
        public void EditProfessor_InputIsExistingProfessor_ReturnsEditedProfessor()
        {
            mapperMock.Setup(mapper => mapper.Map<Professor, PersonViewModel>(It.IsAny<Professor>())).Returns(Mocks.ProfessorViewModel);

            var actionResult = controller.EditProfessor(Mocks.Professor);

            var contentResult = actionResult.Result as OkObjectResult;

            var returnedProfessor = contentResult.Value as ActivePersonViewModel;

            Assert.AreEqual(returnedProfessor.Id, Mocks.ProfessorViewModel.Id);
        }

        [TestMethod]
        public void EditProfessor_InputIsNonexistingProfessor_ReturnsNotFound()
        {
            serviceMock.Setup(service => service.EditProfessor(Mocks.InvalidProfessor)).Throws(new ArgumentNullException());

            var actionResult = controller.EditProfessor(Mocks.InvalidProfessor);

            Assert.IsInstanceOfType(actionResult.Result, typeof(NotFoundObjectResult));
        }
    }
}
