using ECommerceAPI.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace ECommerceAPI.Persistance.Contexts
{
    public class ECommerceAPIDbContext: DbContext
    {
        public ECommerceAPIDbContext(DbContextOptions options) : base(options) { }


            public DbSet<Product> Products{ get; set;}
            public DbSet<Order> Orders { get; set; }
            public DbSet<Customer> Customers { get; set; }
    }
}



