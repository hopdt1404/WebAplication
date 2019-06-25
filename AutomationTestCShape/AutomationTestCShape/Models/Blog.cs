using OpenQA.Selenium.Chrome;
using System;
using System.Collections.Generic;
using System.Text;

namespace AutomationTestCShape.Models
{
    public class Blog
    {
        private string _url;
        protected string ulrDefault = "http://blog.testproject.io/";
        private ChromeDriver _driver;
        public Blog()
        {
            _driver = new ChromeDriver();
        }
        public Blog(string url  = "http://blog.testproject.io/")
        {
            _url = url;
            _driver = new ChromeDriver();
        }
    }
}
