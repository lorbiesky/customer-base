using CustomerSistem.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CustomerSistem.Data.Map
{
    public class CustomerMap : IEntityTypeConfiguration<CustomerModel>
    {
        public void Configure(EntityTypeBuilder<CustomerModel> builder)
        {
            builder.HasKey(e => e.Id);
            builder.Property(e => e.Name).IsRequired().HasMaxLength(255);
            builder.Property(e => e.Email).IsRequired().HasMaxLength(150);
            builder.Property(e => e.Document).IsRequired().HasMaxLength(11);
            builder.Property(e => e.Birthday).IsRequired();
        }
    }
}
