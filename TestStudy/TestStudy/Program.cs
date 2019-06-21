using System;

namespace TestStudy
{
    class Program
    {
        static void Main(string[] args)
        {
            BankAccount myAcount = new BankAccount("Hopdt", 11.99);
            myAcount.Credit(5.77);
            myAcount.Debit(11.22);

            Console.WriteLine("Current balance is ${0}", myAcount.Balance());
        }
    }
}
