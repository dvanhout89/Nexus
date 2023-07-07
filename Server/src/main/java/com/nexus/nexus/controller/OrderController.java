package com.nexus.nexus.controller;

import com.nexus.nexus.model.Order;
import com.nexus.nexus.model.OrderItem;
import com.nexus.nexus.repository.OrderItemRepository;
import com.nexus.nexus.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/orders")
public class OrderController {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private OrderItemRepository orderItemRepository;

    // Get all orders
    @GetMapping
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    // Get order by ID
    @GetMapping("/{id}")
    public ResponseEntity<Order> getOrderById(@PathVariable Long id) {
        Optional<Order> optionalOrder = orderRepository.findById(id);
        return optionalOrder.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Create a new order
    @PostMapping
    public Order createOrder(@RequestBody Order order) {
        return orderRepository.save(order);
    }

    // Update an existing order
    @PutMapping("/{id}")
    public ResponseEntity<Order> updateOrder(@PathVariable Long id, @RequestBody Order updatedOrder) {
        Optional<Order> optionalOrder = orderRepository.findById(id);
        if (optionalOrder.isPresent()) {
            Order existingOrder = optionalOrder.get();
            existingOrder.setCustomer(updatedOrder.getCustomer());
            existingOrder.setOrderDate(updatedOrder.getOrderDate());
            existingOrder.setStatus(updatedOrder.getStatus());

            Order savedOrder = orderRepository.save(existingOrder);
            return ResponseEntity.ok(savedOrder);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Delete an order
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteOrder(@PathVariable Long id) {
        Optional<Order> optionalOrder = orderRepository.findById(id);
        if (optionalOrder.isPresent()) {
            Order order = optionalOrder.get();
            orderRepository.delete(order);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Add an order item to an order
    @PostMapping("/{orderId}/items")
    public ResponseEntity<OrderItem> addOrderItem(@PathVariable Long orderId, @RequestBody OrderItem orderItem) {
        Optional<Order> optionalOrder = orderRepository.findById(orderId);
        if (optionalOrder.isPresent()) {
            Order order = optionalOrder.get();
            orderItem.setOrder(order);
            OrderItem savedOrderItem = orderItemRepository.save(orderItem);
            return ResponseEntity.ok(savedOrderItem);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Update an order item
    @PutMapping("/{orderId}/items/{itemId}")
    public ResponseEntity<OrderItem> updateOrderItem(@PathVariable Long orderId, @PathVariable Long itemId, @RequestBody OrderItem updatedOrderItem) {
        Optional<Order> optionalOrder = orderRepository.findById(orderId);
        if (optionalOrder.isPresent()) {
            Optional<OrderItem> optionalOrderItem = orderItemRepository.findById(itemId);
            if (optionalOrderItem.isPresent()) {
                OrderItem existingOrderItem = optionalOrderItem.get();
                existingOrderItem.setProduct(updatedOrderItem.getProduct());
                existingOrderItem.setQuantity(updatedOrderItem.getQuantity());

                OrderItem savedOrderItem = orderItemRepository.save(existingOrderItem);
                return ResponseEntity.ok(savedOrderItem);
            } else {
                return ResponseEntity.notFound().build();
            }
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Delete an order item
    @DeleteMapping("/{orderId}/items/{itemId}")
    public ResponseEntity<Void> deleteOrderItem(@PathVariable Long orderId, @PathVariable Long itemId) {
        Optional<Order> optionalOrder = orderRepository.findById(orderId);
        if (optionalOrder.isPresent()) {
            Optional<OrderItem> optionalOrderItem = orderItemRepository.findById(itemId);
            if (optionalOrderItem.isPresent()) {
                OrderItem orderItem = optionalOrderItem.get();
                orderItemRepository.delete(orderItem);
                return ResponseEntity.noContent().build();
            } else {
                return ResponseEntity.notFound().build();
            }
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
