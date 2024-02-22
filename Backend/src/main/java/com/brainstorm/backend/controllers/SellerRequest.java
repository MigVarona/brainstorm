package com.brainstorm.backend.controllers;

public class SellerRequest {
    private Integer id;
    private String name;
    private String last_name;
    private String direction;
    private Integer zip_code;
    private String location;
    private String province;
    private Integer telephone;
    private String email;
    
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
    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }
    public String getDirection() {
        return direction;
    }

    public void setDirection(String direction) {
        this.direction = direction;
    }
    public Integer getZip_code() {
        return zip_code;
    }

    public void setZip_code(Integer zip_code) {
        this.zip_code = zip_code;
    }
    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }
    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }
    public Integer getTelephone() {
        return telephone;
    }

    public void setTelephone(Integer telephone) {
        this.telephone = telephone;
    }
    
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public SellerRequest(String name, String last_name, String direction, Integer zip_code, String location, String province, Integer telephone, String email){
        this.name =name;
        this.last_name = last_name;
        this.direction = direction;
        this.zip_code = zip_code;
        this.location = location;
        this.province = province;
        this.telephone = telephone;
        this.email = email;
    }
}
