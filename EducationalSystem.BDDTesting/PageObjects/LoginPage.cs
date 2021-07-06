using OpenQA.Selenium;

namespace EducationalSystem.BDDTesting.PageObjects
{
    public class LoginPage
    {
        private IWebDriver driver;

        public IWebElement UsernameField => driver.FindElement(By.Name("login"));

        public IWebElement PasswordField => driver.FindElement(By.Name("password"));

        public IWebElement LoginButton => driver.FindElement(By.Name("loginButton"));

        public LoginPage(IWebDriver driver)
        {
            this.driver = driver;
        }
    }
}
