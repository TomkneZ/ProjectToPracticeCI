using EducationalSystem.BDDTesting.Helpers;
using EducationalSystem.BDDTesting.PageObjects;
using NUnit.Framework;
using OpenQA.Selenium;
using TechTalk.SpecFlow;

namespace EducationalSystem.BDDTesting.Steps
{
    [Binding]
    public class StudentToCoursePartSteps
    {
        private IWebDriver driver;

        private StudentToCoursePage studentToCoursePage;

        public StudentToCoursePartSteps(IWebDriver driver)
        {
            this.driver = driver;
            studentToCoursePage = new StudentToCoursePage(this.driver);
        }

        [Given(@"that the user is on the studenttocourse page")]
        public void GivenThatTheUserIsOnTheStudenttocoursePage()
        {
            driver.Navigate().GoToUrl(Config.StudentToCoursePageURL);
            HelpMethods.WaitUntilPageLoad();
        }

        [Given(@"select a course ""(.*)""")]
        public void GivenSelectACourse(string courseName)
        {
            studentToCoursePage.CoursesSelect.Click();
            HelpMethods.WaitUntilPageLoad();
            studentToCoursePage.CourseItem(courseName).Click();
        }

        [Given(@"select a student ""(.*)""")]
        public void GivenSelectAStudent(string studentName)
        {
            studentToCoursePage.StudentsSelect.Click();
            studentToCoursePage.StudentItem(studentName).Click();
        }

        [When(@"the user click on Add button")]
        public void WhenTheUserClickOnAddButton()
        {
            studentToCoursePage.AddButton.Click();
        }

        [Then(@"the message ""(.*)"" appears")]
        public void ThenTheMessageAppears(string message)
        {
            HelpMethods.WaitUntilPageLoad();
            var pageText = studentToCoursePage.MessageParagraph.Text;
            Assert.IsTrue(pageText.Contains(message));
        }
    }
}
