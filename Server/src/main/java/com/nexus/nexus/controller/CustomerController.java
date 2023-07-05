package com.nexus.nexus.controller;

import com.nexus.nexus.model.Customer;
import com.nexus.nexus.repository.CustomerRepository;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class CustomerController {

    private final CustomerRepository customerRepository;

    public CustomerController(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    @GetMapping("/customers")
    public List<Customer> getCustomers() {
        return customerRepository.findAll();
    }

    @PostMapping("/customers")
    public Customer createCustomer(@RequestBody Customer customer) {
        return customerRepository.save(customer);
    }

    @GetMapping("/customer/{id}")
    public ResponseEntity<Customer> getCustomer(@PathVariable Long id) {
        return customerRepository.findById(id)
            .map(ResponseEntity::ok)
            .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/customers/{id}")
    public ResponseEntity<Customer> updateCustomer(@PathVariable Long id, @RequestBody Customer customerDetails) {
        return customerRepository.findById(id)
            .map(customer -> {
                customer.setFirstName(customerDetails.getFirstName());
                customer.setLastName(customerDetails.getLastName());
                customer.setEmail(customerDetails.getEmail());
                customer.setPhoneNumber(customerDetails.getPhoneNumber());
                customer.setAddressDetails(customerDetails.getAddressDetails());
                Customer updatedCustomer = customerRepository.save(customer);
                return ResponseEntity.ok(updatedCustomer);
            }).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}/account")
    public ResponseEntity<Customer> updateCustomerAccount(@PathVariable Long id, @RequestBody Customer updatedAccount) {
        Customer existingCustomer = customerRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Customer not found with id: " + id));

        // Update the account details
        existingCustomer.setFirstName(updatedAccount.getFirstName());
        existingCustomer.setLastName(updatedAccount.getLastName());
        existingCustomer.setEmail(updatedAccount.getEmail());
        existingCustomer.setPhoneNumber(updatedAccount.getPhoneNumber());
        existingCustomer.setAddressDetails(updatedAccount.getAddressDetails());

        Customer savedCustomer = customerRepository.save(existingCustomer);
        return ResponseEntity.ok(savedCustomer);
    }

    @DeleteMapping("/customers/{id}")
    public ResponseEntity<?> deleteCustomer(@PathVariable Long id) {
        return customerRepository.findById(id)
            .map(customer -> {
                customerRepository.delete(customer);
                return ResponseEntity.ok().build();
            }).orElseGet(() -> ResponseEntity.notFound().build());
    }
}
