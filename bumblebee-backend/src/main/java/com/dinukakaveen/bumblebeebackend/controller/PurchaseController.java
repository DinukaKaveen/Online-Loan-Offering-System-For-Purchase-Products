package com.dinukakaveen.bumblebeebackend.controller;

import com.dinukakaveen.bumblebeebackend.model.Purchase;
import com.dinukakaveen.bumblebeebackend.repository.PurchaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class PurchaseController {

    @Autowired
    private PurchaseRepository purchaseRepository;

    @GetMapping("/Purchase/{status}")
    public List<Purchase> getPurchaseByStatus(@PathVariable String status){
        return purchaseRepository.findByStatus(status);
    }
}
