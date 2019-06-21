using System;
using System.Collections.Generic;
using System.Text;
using Test.Repositories.Models;
using System.Linq;
using Test.Entities;
using Test.Libs;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace Test.Repositories
{
    public class UserRepository
    {
        private UserContext context;
        public UserRepository()
        {
            context = new UserContext();
        }

        public async Task<List<UserEntity>> List(UserFilterEntity UserFilterEntity)
        {
            if (UserFilterEntity == null)
                UserFilterEntity = new UserFilterEntity();
            if (UserFilterEntity.Selects == null)
                UserFilterEntity.Selects = new List<UserSelect>();

            IQueryable<User> Users = context.Users;
            Users = DynamicFilter(Users, UserFilterEntity);
            Users = SkipAndTake(Users, UserFilterEntity);

            List<UserEntity> UserEntities = await Users.Select(u => new UserEntity
            {
                Id = u.Id,
                Username = UserFilterEntity.Selects.Contains(UserSelect.Username) ? u.Username : "",
                DisplayName = UserFilterEntity.Selects.Contains(UserSelect.DisplayName) ? u.DisplayName : "",
            }).ToListAsync();
            return UserEntities;
        }

        private IQueryable<User> DynamicOrder(IQueryable<User> Users, UserFilterEntity UserFilterEntity)
        {
            if (UserFilterEntity.OrderBy == UserOrderBy.Default)
                Users = UserFilterEntity.OrderType == OrderType.ASC ? Users.OrderBy(u => u.Cx) : Users.OrderByDescending(u => u.Cx);
            if (UserFilterEntity.OrderBy == UserOrderBy.Status)
                Users = UserFilterEntity.OrderType == OrderType.ASC ? Users.OrderBy(u => u.Status) : Users.OrderByDescending(u => u.Status);
            if (UserFilterEntity.OrderBy == UserOrderBy.Username)
                Users = UserFilterEntity.OrderType == OrderType.ASC ? Users.OrderBy(u => u.Username) : Users.OrderByDescending(u => u.Username);
            return Users;
        }
        
        private async Task<List<User>> DynamicSelect(IQueryable<User> Users, UserFilterEntity UserFilterEntity)
        {
            if (UserFilterEntity == null)
                UserFilterEntity = new UserFilterEntity();
            if (UserFilterEntity.Selects == null)
                UserFilterEntity.Selects = new List<UserSelect>();
            
            List<User> UserEntities = await Users.Select(u => new User
            {
                Id = u.Id,
                Username = UserFilterEntity.Selects.Contains(UserSelect.Username) ? u.Username : "",
                DisplayName = UserFilterEntity.Selects.Contains(UserSelect.DisplayName) ? u.DisplayName : "",
            }).ToListAsync();
            return UserEntities;
        }

        private IQueryable<User> DynamicFilter(IQueryable<User> Users, UserFilterEntity UserFilterEntity)
        {
            if (UserFilterEntity.Id.HasValue)
                Users = Users.Where(u => u.Id == UserFilterEntity.Id.Value);
            if (UserFilterEntity.Username != null)
            {
                if (!string.IsNullOrEmpty(UserFilterEntity.Username.ct))
                    Users = Users.Where(u => u.Username.Contains(UserFilterEntity.Username.ct));
                if (!string.IsNullOrEmpty(UserFilterEntity.Username.eq))
                    Users = Users.Where(u => u.Username.Equals(UserFilterEntity.Username.eq));
                if (!string.IsNullOrEmpty(UserFilterEntity.Username.ew))
                    Users = Users.Where(u => u.Username.EndsWith(UserFilterEntity.Username.ew));
                if (!string.IsNullOrEmpty(UserFilterEntity.Username.nc))
                    Users = Users.Where(u => !u.Username.Contains(UserFilterEntity.Username.nc));
                if (!string.IsNullOrEmpty(UserFilterEntity.Username.ne))
                    Users = Users.Where(u => !u.Username.Equals(UserFilterEntity.Username.ne));
                if (!string.IsNullOrEmpty(UserFilterEntity.Username.sw))
                    Users = Users.Where(u => u.Username.StartsWith(UserFilterEntity.Username.sw));
            }
            return Users;
        }
        protected IQueryable<T> SkipAndTake<T>(IQueryable<T> source, FilterEntity FilterEntity)
        {
            source = source.Skip(FilterEntity.Skip).Take(FilterEntity.Take);
            return source;
        }
    }
}
