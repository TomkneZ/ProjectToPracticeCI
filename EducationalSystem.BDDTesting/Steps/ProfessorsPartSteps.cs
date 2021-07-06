using EducationalSystem.BDDTesting.Helpers;
using EducationalSystem.BDDTesting.Models;
using EducationalSystem.BDDTesting.PageObjects;
using NUnit.Framework;
using OpenQA.Selenium;
using TechTalk.SpecFlow;
using TechTalk.SpecFlow.Assist;

namespace EducationalSystem.BDDTesting.Steps
{
    [Binding]
    public class ProfessorsPartSteps
    {
        private IWebDriver driver;

        private LoginPage loginPage;

        private ProfessorsPage professorsPage;

        private CoursesPage coursesPage;

        public ProfessorsPartSteps(IWebDriver driver)
        {
            this.driver = driver;
            loginPage = new LoginPage(this.driver);
            professorsPage = new ProfessorsPage(this.driver);
            coursesPage = new CoursesPage(this.driver);
        }

        [Given(@"that the user is logged in")]
        public void GivenThatUserIsLoggedIn(Table table)
        {
            driver.Navigate().GoToUrl(Config.MainPageURL);

            var user = table.CreateInstance<User>();
            loginPage.UsernameField.SendKeys(user.Username);
            loginPage.PasswordField.SendKeys(user.Password);
            loginPage.LoginButton.Click();
            HelpMethods.WaitUntilPageLoad();
        }

        [Given(@"select the professor as ""(.*)""")]
        public void GivenSelectTheProfessorAsKirillSurkov(string professorName)
        {
            professorsPage.ProfessorsSelect.Click();
            professorsPage.ProfessorItem(professorName).Click();
        }

        [When(@"I click on the school button")]
        public void WhenIClickOnSchoolButton()
        {
            professorsPage.SchoolButton.Click();
        }

        [Then(@"the list with all active students of this school should appear")]
        public void ThenListWithAllActiveStudentsOfThisSchoolShouldAppear()
        {
            Assert.IsNotNull(professorsPage.StudentsTable);
        }

        [When(@"I click on the add course button")]
        public void WhenIClickOnAddCourseButton()
        {
            professorsPage.CourseButton.Click();
        }

        [Then(@"form to add a new course should appear")]
        public void ThenPageWithFormToAddCourseShouldAppear()
        {
            Assert.IsNotNull(coursesPage.CourseForm);
        }

        [Then(@"Info about selected professor's courses should be on the page")]
        public void ThenInfoAboutSelectedProfessorSCoursesShouldBeOnThePage(Table table)
        {
            var coursesTable = professorsPage.CoursesTable.Text;

            foreach (TableRow row in table.Rows)
            {
                var course = row.CreateInstance<Course>();
                Assert.IsTrue(coursesTable.Contains(course.Name));
            }
        }

        [When(@"I fill in the form to add a course")]
        public void WhenIFillInTheFormToAddACourse(Table table)
        {
            var course = table.CreateInstance<Course>();
            coursesPage.NameField.SendKeys(course.Name);
            coursesPage.UniqueCodeField.SendKeys(course.UniqueCode);
        }

        [When(@"click on the add course button")]
        public void WhenClickOnTheAddCourseButton()
        {
            coursesPage.AddCourseButton.Click();
        }

        [Then(@"message ""(.*)"" should appear")]
        public void ThenMessageShouldAppearAsCourseWasAdded(string message)
        {
            HelpMethods.WaitUntilPageLoad();
            var pageText = coursesPage.MessageParagraph.Text;
            Assert.IsTrue(pageText.Contains(message));
        }
    }
}
