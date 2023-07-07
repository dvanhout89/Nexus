package com.nexus.nexus.repository;

import com.nexus.nexus.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
}
