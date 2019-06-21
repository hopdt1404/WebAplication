using System;
using System.Collections.Generic;
using System.Text;

namespace Test.Libs
{
    public enum OrderType
    {
        ASC = 1,
        DESC = 2
    }

    public enum ERROR_CODE
    {
        Empty,
        NotExisted,
        Existed,
        NoPermission,
        IsMin,
        IsMax,
        Duplicate,
        Used,
        NotNull
    }


}
