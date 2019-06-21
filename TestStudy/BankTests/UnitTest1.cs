using Microsoft.VisualStudio.TestTools.UnitTesting;
using TestStudy;

namespace BankTests
{
    [TestClass]
    public class BankAccountTest
    {
        [TestMethod]
        public void Debit_WithValidAmount_UpdatesBalance()
        {
            // Arrange
            double beginningBalance = 11.99;
            double debitAmount = 4.55;
            double expected = 7.44;
            BankAccount account = new BankAccount("Mr. Bryan Walton", beginningBalance);

            // Act
            account.Debit(debitAmount);

            // Assert
            double actual = account.Balance();
            Assert.AreEqual(expected, actual, 0.001, "Account not debited correctly");
        }
        [TestMethod]
        public void Debit_WhenIsLessThanZero_ShouldThrowArgumentOutOfRange()
        {
            double beginingBalance = 11.99;
            double debitAmount = -100.00;
            BankAccount account = new BankAccount("hopdt", beginingBalance);
            try
            {
                account.Debit(debitAmount);
            }catch(System.ArgumentOutOfRangeException e)
            {
                StringAssert.Contains(e.Message, BankAccount.DebitAmountLessThanZeroMessage);
            }
            Assert.Fail("The expected exception was not throw");

            
        }
        [TestMethod]
        public void Debit_WhenIsGresterThanBalance_ShouldThrowArgumentOutOfRange()
        {
            double beginingBalance = 11.99;
            double debitAmount = 100.00;
            BankAccount account = new BankAccount("hopdt", beginingBalance);
            try
            {
                account.Debit(debitAmount);
            }
            catch(System.ArgumentOutOfRangeException e)
            {
                // Arrsert
                StringAssert.Contains(e.Message, BankAccount.DebitAmountExceedsBalanceMessage);
            }

            Assert.Fail("The expected exception was not throw");
        }
    }

}
