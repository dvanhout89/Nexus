package com.nexus.nexus.model;

import com.nexus.nexus.enums.OrderStatus;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "customer_id", nullable = false)
    private Customer customer;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
    private List<OrderItem> orderItems = new ArrayList<>();

    @Column(nullable = false)
    private Date orderDate;

    @Column(nullable = false)
    private Double totalPrice;

    @Column(nullable = false)
    private Integer totalItems;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private OrderStatus status;

    // Constructors

    public Order() {
    }

    public Order(Customer customer) {
        this.customer = customer;
        this.orderDate = new Date();
        this.totalPrice = 0.0;
        this.totalItems = 0;
        this.status = OrderStatus.CREATED;
    }

    // Getters and setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public List<OrderItem> getOrderItems() {
        return orderItems;
    }

    public void setOrderItems(List<OrderItem> orderItems) {
        this.orderItems = orderItems;
    }

    public Date getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(Date orderDate) {
        this.orderDate = orderDate;
    }

    public Double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(Double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public Integer getTotalItems() {
        return totalItems;
    }

    public void setTotalItems(Integer totalItems) {
        this.totalItems = totalItems;
    }

    public OrderStatus getStatus() {
        return status;
    }

    public void setStatus(OrderStatus status) {
        this.status = status;
    }

    public void updateTotalPrice() {
        double totalPrice = 0.0;
        for (OrderItem orderItem : orderItems) {
            totalPrice += orderItem.getProduct().getPrice() * orderItem.getQuantity();
        }
        this.totalPrice = totalPrice;
    }

    public void updateTotalItems() {
        int totalItems = 0;
        for (OrderItem orderItem : orderItems) {
            totalItems += orderItem.getQuantity();
        }
        this.totalItems = totalItems;
    }
}
