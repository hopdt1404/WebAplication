using System;
using System.Collections.Generic;

namespace Test.Repositories.Models
{
    public partial class User
    {
        public Guid Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public int? Cx { get; set; }
        public string DisplayName { get; set; }
        public DateTime? LastLogin { get; set; }
        public short? Status { get; set; }
    }
}
