using ikvm.runtime;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.TestHost;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using Xunit;

namespace SimpleIntegrationTest.Fixtures
{
    [CollectionDefinition("SystemCollection")]

    public class TestContext
    {
        public HttpClient client { set; get; }
        private TestServer _server; 
        public TestContext()
        {
            client = new HttpClient();

            
        }

        private void SetClient()
        {
            _server = new TestServer(new WebHostBuilder().UseStartup<Startup>());
            client = _server.CreateClient();
        }
    }
}
