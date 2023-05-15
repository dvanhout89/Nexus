package com.nexus.nexus.spring.jpa.postgresql.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.nexus.nexus.spring.jpa.postgresql.model.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
    List<Customer> findByPublished(boolean published);

    List<Customer> findByTitleContaining(String title);
}
