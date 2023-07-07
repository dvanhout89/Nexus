package com.nexus.nexus.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.nexus.nexus.model.OrderItem;


public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {
}
