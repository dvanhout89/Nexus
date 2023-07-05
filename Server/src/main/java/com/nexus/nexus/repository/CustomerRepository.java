package com.nexus.nexus.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.nexus.nexus.model.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
}