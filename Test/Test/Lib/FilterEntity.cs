using System;
using System.Collections.Generic;
using System.Text;

namespace Test.Libs
{
    public class FilterEntity
    {
        public int Skip { get; set; }
        public int Take { get; set; }
        public OrderType OrderType { get; set; }
        public FilterEntity()
        {
            Skip = 0;
            Take = 10;
            OrderType = OrderType.ASC;
        }
    }

}
