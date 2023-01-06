using CustomerSistem.Models;

namespace CustomerSistem.Repositories.Interfaces
{
    public interface ICustomerRepository
    {
        Task<List<CustomerModel>> SearchAll();
        Task<CustomerModel> SearchById(int id);
        Task<CustomerModel> Add(CustomerModel customer);
        Task<CustomerModel> Update(CustomerModel customer, int id);
        Task<bool> Remove(int id);
    }
}
