using System;
using System.Collections.Generic;
using System.Text;
using Xunit;

namespace SimpleIntegrationTest.Fixtures
{
    [CollectionDefinition("SystemCollection")]
    public class Collletions : ICollectionFixture<TestContext>
    {
    }
}
