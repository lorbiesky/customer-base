using CustomerSistem.Data;
using CustomerSistem.Models;
using CustomerSistem.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace CustomerSistem.Repositories
{
    public class CustomerRepository : ICustomerRepository
    {
        private readonly CustomerSistemDBContex _dbContext;
        public CustomerRepository(CustomerSistemDBContex customerSistemDBContex) 
        {
            _dbContext = customerSistemDBContex;
        }
        public async Task<List<CustomerModel>> SearchAll()
        {
            return await _dbContext.Customers.ToListAsync();
        }

        public async Task<CustomerModel> SearchById(int id)
        {
            return await _dbContext.Customers.FirstOrDefaultAsync(e => e.Id == id);
        }

        public async Task<CustomerModel> Add(CustomerModel customer)
        {
            await _dbContext.Customers.AddAsync(customer);
            await _dbContext.SaveChangesAsync ();

            return customer;
        }
        public async Task<CustomerModel> Update(CustomerModel customer, int id)
        {
            CustomerModel customerDb = await SearchById(id);

            if (customerDb == null) 
            {
                throw new Exception($"Customer for ID: {id} not found.");
            }

            customerDb.Name = customer.Name;
            customerDb.Email = customer.Email;
            customerDb.Document = customer.Document;
            customerDb.Birthday = customer.Birthday;

            _dbContext.Customers.Update(customer);
            await _dbContext.SaveChangesAsync();

            return customerDb;
        }

        public async Task<bool> Remove(int id)
        {
            CustomerModel customerDb = await SearchById(id);

            if (customerDb == null)
            {
                throw new Exception($"Customer for ID: {id} not found.");
            }

            _dbContext.Customers.Remove(customerDb);
            await _dbContext.SaveChangesAsync();
            return true;
        }

    }
}
