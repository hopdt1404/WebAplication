using SimpleIntegrationTest.Fixtures;
using System;
using System.Collections.Generic;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace SimpleIntegrationTest.Scenarions
{
    public class PingTest
    {
        private readonly TestContext _sut;

        public PingTest()
        {
            _sut = new TestContext();
        }
        [Fact]
        public async Task PingResultOkResponse()
        {
            var response = await _sut.client.GetAsync("/ping");
            //response.StatusCode.Should().Be(HttpStatusCode.OK);

        }
    }
}
