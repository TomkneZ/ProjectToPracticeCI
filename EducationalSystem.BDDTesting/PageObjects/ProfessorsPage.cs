using OpenQA.Selenium;

namespace EducationalSystem.BDDTesting.PageObjects
{
    public class ProfessorsPage
    {
        private IWebDriver driver;

        public IWebElement ProfessorsSelect => driver.FindElement(By.Name("professor"));

        public IWebElement ProfessorItem(string professorName) => driver.FindElement(By.Id(professorName));

        public IWebElement SchoolButton => driver.FindElement(By.Name("schoolbutton"));

        public IWebElement CourseButton => driver.FindElement(By.Name("coursebutton"));

        public IWebElement StudentsTable => driver.FindElement(By.Name("studentstable"));

        public IWebElement CoursesTable => driver.FindElement(By.ClassName("mat-elevation-z8"));

        public ProfessorsPage(IWebDriver driver)
        {
            this.driver = driver;
        }
    }
}
