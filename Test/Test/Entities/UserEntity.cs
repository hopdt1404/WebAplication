using System;
using System.Collections.Generic;
using Test;

namespace Test.Entities
{
    public class UserEntity 
    {
        public Guid Id { get; set; }
        public string Username { get; set; }
        public string DisplayName { get; set; }
        public string Password { get; set; }
        public DateTime? LastLogin { get; set; }
        public int? Status { get; set; }
    }

    public class UserFilterEntity : Libs.FilterEntity
    {
        public Guid? Id { get; set; }
        public StringFilter Username { get; set; }
        public UserOrderBy OrderBy { get; set; }
        public IEnumerable<UserSelect> Selects { get; set; }
        public List<Guid?> listGuid { get; set; }
    }

    public enum UserStatus
    {
        NONE,
        Active,
        Deactive,
        Lock,
    }

    public enum UserOrderBy
    {
        Default,
        Username,
        Status
    }

    public enum UserSelect
    {
        Username,
        DisplayName,
        Password,
        Status,
        Language
    }
}
