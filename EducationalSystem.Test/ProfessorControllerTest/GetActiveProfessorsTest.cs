using AutoMapper;
using DatabaseStructure.Models;
using EducationalSystem.WebAPI.Controllers;
using EducationalSystem.WebAPI.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using ServiceLayer.ServiceInterfaces;
using System.Collections.Generic;

namespace EducationalSystem.Test.ProfessorControllerTest
{
    [TestClass]
    public class GetActiveProfessorsTest
    {
        [TestMethod]
        public void GetActiveProfessors_ReturnsActiveProfessors()
        {
            var mapperMock = new Mock<IMapper>();
            var serviceMock = new Mock<IProfessorService>();
            var controller = new ProfessorsController(mapperMock.Object, serviceMock.Object);

            mapperMock.Setup(mapper => mapper.Map<IEnumerable<Professor>, List<ActivePersonViewModel>>(It.IsAny<IEnumerable<Professor>>())).Returns(Mocks.ProfessorsViewModel);

            var actionResult = controller.GetActiveProfessors();

            var contentResult = actionResult.Result as OkObjectResult;

            var returnedProfessors = contentResult.Value as List<ActivePersonViewModel>;

            Assert.AreEqual(returnedProfessors[0].Id, Mocks.ProfessorsViewModel[0].Id);
        }
    }
}
