using System;
using System.Collections.Generic;
using System.Text;

namespace TestStudy
{
    public class BankAccount

    {
        public const string DebitAmountExceedsBalanceMessage = "Debit amount exceeds balance";
        public const string DebitAmountLessThanZeroMessage = "Debit amount is less than zero";

        private readonly string _customerName;
        private double _balance;

        private BankAccount()
        {

        }

        public BankAccount(string customerName, double balance)
        {
            _customerName = customerName;
            _balance = balance;

        }
        public double Balance()
        {
            return _balance;
        }

        public void Debit(double amount)
        {
            if(amount > _balance)
            {
                throw new System.ArgumentOutOfRangeException("amount", amount, DebitAmountExceedsBalanceMessage);
            }
            if(amount < 0)
            {
                throw new System.ArgumentOutOfRangeException("amount", amount, DebitAmountLessThanZeroMessage);
            }
            _balance -= amount;
        }

        public void Credit(double amount)
        {
            if(amount < 0)
            {
                throw new ArgumentOutOfRangeException("amount");
            }
            _balance += amount;

        }











    }
}
