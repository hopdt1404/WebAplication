using Microsoft.VisualStudio.TestTools.UnitTesting;
using Test.Entities;
using Test.Repositories.Models;
using Test.Repositories;
using System.Threading.Tasks;
using System;

namespace IntegrationTest
{
    [TestClass]
    public class UnitTest1
    {
        UserContext userContext;
        public UnitTest1()
        {
            userContext = new UserContext();
        }

        [TestInitialize]
        public async Task Setup()
        {
            userContext.Users.Add(new User
            {
                Id = new Guid("d5ca4537-9299-485f-aac7-4d80f5e89e36"),
                Username = "ab",
                Password = "123456"
            });
            userContext.Users.Add(new User
            {
                Id = new Guid("71b31353-52dd-4f1f-873f-f250350eae9e"),
                Username = "aa",
                Password = "123456"
                
            });
            userContext.Users.Add(new User
            {
                Id = new Guid("3be55193-4174-415a-8dc0-d52bd930f69d"),
                Username = "asdd",
                Password = "123456"
                
            });
            userContext.SaveChanges();
        }

        //[TestMethod]
        //public async Task TestMethod1()
        //{
        //    UserRepository userRepository = new UserRepository();
        //    UserFilterEntity userFilterEntity = new UserFilterEntity();
        //    userFilterEntity.Username = new Test.StringFilter { nc = "as" };
        //    var users = await userRepository.List(userFilterEntity);
        //    Assert.AreEqual(2, users.Count);
        //}
        [TestMethod]
        public async Task TestMethod1_1()
        {
            UserRepository userRepository = new UserRepository();
            UserFilterEntity userFilterEntity = new UserFilterEntity();
            userFilterEntity.Username = new Test.StringFilter { ct = "as" };
            var user = await userRepository.List(userFilterEntity);
            Assert.AreEqual(1, user.Count);


        }

    }


}
