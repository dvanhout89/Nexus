package com.nexus.nexus.controller;

import com.nexus.nexus.model.Cart;
import com.nexus.nexus.model.CartItem;
import com.nexus.nexus.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/carts")
public class CartController {

    private final CartRepository cartRepository;

    @Autowired
    public CartController(CartRepository cartRepository) {
        this.cartRepository = cartRepository;
    }

    // Get all carts
    @GetMapping
    public List<Cart> getAllCarts() {
        return cartRepository.findAll();
    }

    // Get a cart by ID
    @GetMapping("/{id}")
    public ResponseEntity<Cart> getCartById(@PathVariable Long id) {
        Cart cart = cartRepository.findById(id).orElse(null);
        if (cart != null) {
            return new ResponseEntity<>(cart, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Create a new cart
    @PostMapping
    public ResponseEntity<Cart> createCart(@RequestBody Cart cart) {
        Cart savedCart = cartRepository.save(cart);
        return new ResponseEntity<>(savedCart, HttpStatus.CREATED);
    }

    // Update a cart
    @PutMapping("/{id}")
    public ResponseEntity<Cart> updateCart(@PathVariable Long id, @RequestBody Cart updatedCart) {
        Cart cart = cartRepository.findById(id).orElse(null);
        if (cart != null) {
            updatedCart.setId(id);
            Cart savedCart = cartRepository.save(updatedCart);
            return new ResponseEntity<>(savedCart, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Delete a cart
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCart(@PathVariable Long id) {
        cartRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // Add an item to a cart
    @PostMapping("/{cartId}/items")
    public ResponseEntity<Cart> addItemToCart(@PathVariable Long cartId, @RequestBody CartItem cartItem) {
        Cart cart = cartRepository.findById(cartId).orElse(null);
        if (cart != null) {
            cart.getCartItems().add(cartItem);
            Cart savedCart = cartRepository.save(cart);
            return new ResponseEntity<>(savedCart, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Remove an item from a cart
    @DeleteMapping("/{cartId}/items/{itemId}")
    public ResponseEntity<Cart> removeItemFromCart(@PathVariable Long cartId, @PathVariable Long itemId) {
        Cart cart = cartRepository.findById(cartId).orElse(null);
        if (cart != null) {
            cart.getCartItems().removeIf(item -> item.getId().equals(itemId));
            Cart savedCart = cartRepository.save(cart);
            return new ResponseEntity<>(savedCart, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
