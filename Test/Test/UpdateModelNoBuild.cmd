dotnet ef dbcontext scaffold  "data source=localhost;initial catalog=User;persist security info=True;user id=abcd;password=12345678;multipleactiveresultsets=True;" Microsoft.EntityFrameworkCore.SqlServer -c UserContext  -o Repositories/Models -f --no-build --table User 

