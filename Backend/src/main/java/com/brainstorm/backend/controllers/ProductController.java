package com.brainstorm.backend.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.brainstorm.backend.persistence.Product;
import com.brainstorm.backend.persistence.ProductRepository;

@RestController
@CrossOrigin(origins= "http://localhost:3000")
public class ProductController {
    private ProductRepository repository;
    public ProductController(@Autowired ProductRepository repository) {
        this.repository = repository;
    }
    
    @GetMapping("/products")
    public List<ProductResponse> showProducts() {
        List<ProductResponse> products = new ArrayList<ProductResponse>();
        List<Product> productsInDataBase = repository.findAll();
        for (Product product : productsInDataBase) {
            products.add(new ProductResponse(
                product.getId(),
                product.getName(),
                product.getDescription(),
                product.getId_category(),
                product.getPrice(),
                product.getStock(),
                product.getTax()));
        }
        return products;
    }

    @GetMapping("/products/{idProduct}")
    public ResponseEntity<ProductResponse> getProductById(@PathVariable Integer idProduct) {
        Optional<Product> optionalProduct = repository.findById(idProduct);
        if (optionalProduct.isPresent()) {
            Product product = optionalProduct.get();
            ProductResponse response = new ProductResponse(
                product.getId(),
                product.getName(),
                product.getDescription(),
                product.getId_category(),
                product.getPrice(),
                product.getStock(),
                product.getTax()
            );
            return ResponseEntity.ok().body(response);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    
}
