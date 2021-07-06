using OpenQA.Selenium;

namespace EducationalSystem.BDDTesting.PageObjects
{
    public class CoursesPage
    {
        private IWebDriver driver;

        public IWebElement NameField => driver.FindElement(By.Name("name"));

        public IWebElement UniqueCodeField => driver.FindElement(By.Name("uniqueCode"));

        public IWebElement AddCourseButton => driver.FindElement(By.Name("addCourseButton"));

        public IWebElement MessageParagraph => driver.FindElement(By.TagName("p"));

        public IWebElement CourseForm => driver.FindElement(By.Name("courseform"));

        public CoursesPage(IWebDriver driver)
        {
            this.driver = driver;
        }
    }
}
