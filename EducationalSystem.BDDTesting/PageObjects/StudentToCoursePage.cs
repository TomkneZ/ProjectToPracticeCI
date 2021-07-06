using OpenQA.Selenium;

namespace EducationalSystem.BDDTesting.PageObjects
{
    public class StudentToCoursePage
    {
        private IWebDriver driver;

        public IWebElement StudentsSelect => driver.FindElement(By.Name("studentselect"));

        public IWebElement StudentItem(string studentName) => driver.FindElement(By.Id(studentName));

        public IWebElement CoursesSelect => driver.FindElement(By.Name("courseselect"));

        public IWebElement CourseItem(string courseName) => driver.FindElement(By.Id(courseName));

        public IWebElement AddButton => driver.FindElement(By.Name("addbutton"));

        public IWebElement MessageParagraph => driver.FindElement(By.TagName("p"));

        public StudentToCoursePage(IWebDriver driver)
        {
            this.driver = driver;
        }
    }
}
