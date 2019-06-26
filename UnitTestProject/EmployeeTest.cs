using erp.hr.Models;
using erp.hr.Repositories;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace erp.hr.UintTest.TestEmployee
{
    public class EmployeeTest
    {
        public EmployeeRepository employee;
        public EmployeeTest()
        {
            
        }
        [TestInitialize]
        public void SetUp()
        {
            employee = new EmployeeRepository();
        }

        [TestMethod]
        public void TestMethodGetId()
        {
            Guid idInPut = new Guid("806BE635-6A0D-4353-8222-EA39543448FD");

            Employee ansExpected = new Employee();
            ansExpected.Id = new Guid("806BE635-6A0D-4353-8222-EA39543448FD");
            ansExpected.Cx = 2;
            ansExpected.DisplayName = "HungViManh";
            ansExpected.Code = "HVM";
            ansExpected.PrimaryEmail = "hungvimanh@hvm.com";
            ansExpected.AlternativeEmail = "hungvimanh@hvm.com";
            ansExpected.DepartmentId = new Guid("B42CA1DA-4C63-4F6F-B7BF-51BD72D3E46C");
            ansExpected.JobTitleId = new Guid("348E7C23-D918-4FA0-A620-2764E8DC4C61");
            ansExpected.JobLevelId = new Guid("B80515C0-9A59-486E-88C9-9262ADA43A2F");
            ansExpected.JoinDate = new DateTime(2019, 01, 01);
            ansExpected.EffectiveDate = new DateTime(2019, 01, 02);
            ansExpected.EndDate = new DateTime(2019, 05, 01);
            ansExpected.Status =  1;

            EmployeeRepository obj = new EmployeeRepository();

            
            Assert.Equals(ansExpected, obj.Get(idInPut));
        }

        
    }
}
