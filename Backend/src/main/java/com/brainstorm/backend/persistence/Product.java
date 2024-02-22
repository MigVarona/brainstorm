package com.brainstorm.backend.persistence;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "products")
public class Product {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String description;
    private Integer id_category;
    private Integer price;
    private Integer stock;
    private Integer tax;
    
    
    public Product(String name, String description, Integer id_category, Integer price, Integer stock, Integer tax) {
        this.name = name;
        this.description = description;
        this.id_category = id_category;
        this.price = price;
        this.stock = stock;
        this.tax = tax;
    }
    
    public Product(){
        
    }
    
    public Integer getId() {
        return id;
    }
    
    public void setId(Integer id) {
        this.id = id;
    }
    
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    
    public String getDescription() {
        return description;
    }
    
    public void setDescription(String description) {
        this.description = description;
    }
    
    public Integer getId_category() {
        return id_category;
    }
    
    public void setId_category(Integer id_category) {
        this.id_category = id_category;
    }

    public Integer getPrice() {
        return price;
    }
    
    public void setPrice(Integer price) {
        this.price = price;
    }
    
    public Integer getStock() {
        return stock;
    }
    
    public void setStock(Integer stock) {
        this.stock = stock;
    }
    
    public Integer getTax() {
        return tax;
    }
    
    public void setTax(Integer tax) {
        this.tax = tax;
    }
}
