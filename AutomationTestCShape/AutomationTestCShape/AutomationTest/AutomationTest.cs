using System;
using System.Collections.Generic;
using System.Text;
using DocumentFormat.OpenXml.Bibliography;
using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;

namespace AutomationTestCShape
{
    public class AutomationTest
    {
        IWebDriver driver;
        //[TestFixtureSetUp]
        public void StartUp()
        {
            driver = new ChromeDriver();
            driver.Url = "http://blog.testproject.io/";
        }
        //[TestFixtureTearDown]
        public void EndTest()
        {
            driver.Quit();
        }
        [Test]
        public void blogTest()
        {
            Assert.IsTrue(Pages.contactUs.isAt());
        }


    }
}
