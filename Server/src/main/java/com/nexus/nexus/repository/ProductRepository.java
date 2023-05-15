package com.nexus.nexus.spring.jpa.postgresql.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.nexus.nexus.spring.jpa.postgresql.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByPublished(boolean published);

    List<Product> findByTitleContaining(String title);
}
