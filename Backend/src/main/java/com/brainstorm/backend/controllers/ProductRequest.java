package com.brainstorm.backend.controllers;

public class ProductRequest {
    private Integer id;
    private String name;
    private String description;
    private Integer id_category;
    private Integer price;
    private Integer stock;
    private Integer tax;
    
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

    public Integer getId_Category() {
        return id_category;
    }

    public void setId_category(Integer id_category){
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

    public ProductRequest(String name, String description, Integer price, Integer stock) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.stock = stock;
    }
}