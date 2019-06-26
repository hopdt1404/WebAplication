using System;
using System.Collections.Generic;
using System.Text;

namespace AccessModifierCShape.PracticeAccessModifier
{
    public class User
    {
        private string _UserName {
            set { _UserName = value;}
            get { return _UserName; }
        }
        string ITem { set; get; }

        public User(string userName)
        {
            _UserName = userName;
        }


        
    }
}
