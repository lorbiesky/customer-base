﻿namespace CustomerSistem.Models
{
    public class CustomerModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Document { get; set; }
        public DateTime Birthday { get; set; }
        public string? Address { get; set; }
        public string? City { get; set; }
        public string? StateUf { get; set; }
        public bool? OwnHome { get; set; }

    }
}
