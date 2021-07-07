using AutoMapper;
using DatabaseStructure.Models;
using EducationalSystem.WebAPI.Controllers;
using EducationalSystem.WebAPI.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using ServiceLayer.ServiceInterfaces;

namespace EducationalSystem.Test.ProfessorControllerTest
{
    [TestClass]
    public class GetProfessorTest
    {
        [TestMethod]
        public void GetProfessor_InputIs9_ReturnsProfessorWithSpecifiedId()
        {
            var mapperMock = new Mock<IMapper>();
            var serviceMock = new Mock<IProfessorService>();
            var controller = new ProfessorsController(mapperMock.Object, serviceMock.Object);

            const int PROFESSOR_ID = 9;

            mapperMock.Setup(mapper => mapper.Map<Professor, ActivePersonViewModel>(It.IsAny<Professor>())).Returns(Mocks.ProfessorViewModel);

            var actionResult = controller.GetProfessor(PROFESSOR_ID);

            var contentResult = actionResult.Result as OkObjectResult;

            var returnedProfessor = contentResult.Value as ActivePersonViewModel;

            Assert.AreEqual(returnedProfessor.Id, PROFESSOR_ID);
        }
    }
}
