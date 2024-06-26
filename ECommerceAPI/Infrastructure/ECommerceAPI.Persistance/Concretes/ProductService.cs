using ECommerceAPI.Application.Abstraction;
using ECommerceAPI.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ECommerceAPI.Persistance.Concretes
{
    public class ProductService : IProductService
    {
        public List<Product> GetProducts()
            => new()
            {
                new()
                {
                    Id = Guid.NewGuid(),
                    Name = "Product 1",
                    Price = 100,
                    Stock = 10
                },

                   new()
                {
                    Id = Guid.NewGuid(),
                    Name = "Product 2",
                    Price = 200,
                    Stock = 20
                }

            };
        
         
        
    }
}
