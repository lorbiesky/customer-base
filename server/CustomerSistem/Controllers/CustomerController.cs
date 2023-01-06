using CustomerSistem.Models;
using CustomerSistem.Repositories.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CustomerSistem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private readonly ICustomerRepository _customerRepository;
        public CustomerController(ICustomerRepository customerRepository)
        {
            _customerRepository = customerRepository;
        }

        [HttpGet]
        public async Task<ActionResult<List<CustomerModel>>> SearchAll()
        {
            List<CustomerModel> customers = await _customerRepository.SearchAll();
            return Ok(customers);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<List<CustomerModel>>> SearchById(int id)
        {
            CustomerModel customer = await _customerRepository.SearchById(id);
            return Ok(customer);
        }

        [HttpPost]
        public async Task<ActionResult<CustomerModel>> Add([FromBody] CustomerModel customerModel) 
        { 
            CustomerModel customer = await _customerRepository.Add(customerModel);
            return Ok(customer);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<CustomerModel>> Update([FromBody] CustomerModel customerModel, int id)
        {
            CustomerModel customer = await _customerRepository.Update(customerModel, id);
            return Ok(customer);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<CustomerModel>> Remove(int id)
        {
            bool removed = await _customerRepository.Remove(id);
            return Ok(removed);
        }
    }
}
