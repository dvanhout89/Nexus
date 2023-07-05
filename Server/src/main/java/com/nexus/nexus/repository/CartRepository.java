package com.nexus.nexus.repository;
import com.nexus.nexus.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartRepository extends JpaRepository<Cart, Long> {
}