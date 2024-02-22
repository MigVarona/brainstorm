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

import com.brainstorm.backend.persistence.Seller;
import com.brainstorm.backend.persistence.SellerRepository;


@RestController
@CrossOrigin(origins= "http://localhost:3000")
public class SellerController {
    private SellerRepository repository;
    public SellerController( @Autowired SellerRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/sellers")
    public List<SellerResponse> showSellers() {
        List<SellerResponse> sellers = new ArrayList<SellerResponse>();
        List<Seller> sellersInDataBase = repository.findAll();
        for (Seller seller : sellersInDataBase){
            sellers.add(new SellerResponse(
                seller.getId(),
                seller.getName(),
                seller.getLast_name(),
                seller.getDirection(),
                seller.getZip_code(),
                seller.getLocation(),
                seller.getProvince(),
                seller.getTelephone(),
                seller.getEmail()));
        }
        return sellers;
    }

    @GetMapping("sellers/{idSeller}")
    public ResponseEntity <SellerResponse>getSellerById(@PathVariable Integer idSeller) {
        Optional<Seller> optionalSeller = repository.findById(idSeller);
        if (optionalSeller.isPresent()) {
            Seller seller = optionalSeller.get();
            SellerResponse response = new SellerResponse(
                seller.getId(),
                seller.getName(),
                seller.getLast_name(),
                seller.getDirection(),
                seller.getZip_code(),
                seller.getLocation(),
                seller.getProvince(),
                seller.getTelephone(),
                seller.getEmail()
            );
            return ResponseEntity.ok().body(response);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
    
