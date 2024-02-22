package com.brainstorm.backend.controllers;

public class ProductResponse {
    private Integer id;
    private String name;
    private String description;
    private Integer id_category;
    private Integer price;
    private Integer stock;
    private Integer tax;
    
    
    public ProductResponse(Integer id, String name, String description, Integer id_category, Integer price, Integer stock, Integer tax) {
        this.id=id;
        this.name = name;
        this.description = description;
        this.id_category = id_category;
        this.price = price;
        this.stock = stock;
        this.tax = tax;
    }
    
    public Integer getId() {
        return id;
    }
    
    public String getName() {
        return name;
    }
    
    public String getDescription() {
        return description;
    }

    public Integer getId_category() {
        return id_category;
    }
    
    public Integer getPrice() {
        return price;
    }
    
    public Integer getStock() {
        return stock;
    }
    
    public Integer getTax() {
        return tax;
    }

}
