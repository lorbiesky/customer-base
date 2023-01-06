using CustomerSistem.Data.Map;
using CustomerSistem.Models;
using Microsoft.EntityFrameworkCore;

namespace CustomerSistem.Data
{
    public class CustomerSistemDBContex : DbContext
    {
        public CustomerSistemDBContex(DbContextOptions<CustomerSistemDBContex> options)
                : base(options)
        {
        }

        public DbSet<CustomerModel> Customers { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new CustomerMap());
            base.OnModelCreating(modelBuilder);
        }
    }
}
