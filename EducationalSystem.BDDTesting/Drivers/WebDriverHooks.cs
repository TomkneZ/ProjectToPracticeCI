using BoDi;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using System.IO;
using TechTalk.SpecFlow;

namespace EducationalSystem.BDDTesting.Drivers
{
    [Binding]
    public class WebDriverHooks
    {
        private readonly IObjectContainer container;

        public WebDriverHooks(IObjectContainer container)
        {
            this.container = container;
        }

        [BeforeScenario]
        public void CreateWebDriver()
        {
            var directoryInfo = new DirectoryInfo(Directory.GetCurrentDirectory());
            var service = ChromeDriverService.CreateDefaultService(@$"{directoryInfo.Parent.ToString()}\bin\Debug\netcoreapp3.1\");
            var driver = new ChromeDriver(service);
            container.RegisterInstanceAs<IWebDriver>(driver);
        }

        [AfterScenario]
        public void DestroyWebDriver()
        {
            var driver = container.Resolve<IWebDriver>();

            if (driver != null)
            {
                driver.Quit();
                driver.Dispose();
            }
        }
    }
}
