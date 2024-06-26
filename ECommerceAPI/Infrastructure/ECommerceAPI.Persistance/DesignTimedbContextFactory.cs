using ECommerceAPI.Persistance.Contexts;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace ECommerceAPI.Persistance
{
    public class DesignTimedbContextFactory: IDesignTimeDbContextFactory<ECommerceAPIDbContext>

    {
        public ECommerceAPIDbContext CreateDbContext(string[] args)
        {
            DbContextOptionsBuilder<ECommerceAPIDbContext> dbContextOptionsBuilder = new();
            dbContextOptionsBuilder.UseNpgsql(Configuration.ConnectionString);
            return new(dbContextOptionsBuilder.Options);
        }
    }
}
