package com.brainstorm.backend.controllers;

public class SellerResponse {
    private Integer id;
    private String name;
    private String last_name;
    private String direction;
    private Integer zip_code;
    private String location;
    private String province;
    private Integer telephone;
    private String email;

    public SellerResponse(Integer id, String name, String last_name, String direction, Integer zip_code, String location, String province, Integer telephone, String email){
        this.id = id;
        this.name =name;
        this.last_name = last_name;
        this.direction = direction;
        this.zip_code = zip_code;
        this.location = location;
        this.province = province;
        this.telephone = telephone;
        this.email = email;
    }

    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getLast_name() {
        return last_name;
    }

    public String getDirection() {
        return direction;
    }

    public Integer getZip_code() {
        return zip_code;
    }
    
    public String getLocation() {
        return location;
    }

    public String getProvince() {
        return province;
    }


    public Integer getTelephone() {
        return telephone;
    }
    
    public String getEmail() {
        return email;
    }
    
}
