using Microsoft.VisualStudio.TestTools.UnitTesting;
using UnitTestCShape;

namespace CalculatorTest
{
    [TestClass]
    public class CalculatorTest
    {
        private Calculator _cal;

        [TestInitialize]
        public void SetUp()
        {
            _cal = new Calculator();

        }
        [TestMethod]
        public void OnePlusOneEqualTwo()
        {
            Assert.AreEqual(2, _cal.Add(1, 1));
        }
        [TestMethod]
        public void TwoPlusThreeEqualFive()
        {
            Assert.AreEqual(5, _cal.Add(3, 2));
        }
    }
}
