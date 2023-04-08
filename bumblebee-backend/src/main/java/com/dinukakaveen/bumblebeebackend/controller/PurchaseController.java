package com.dinukakaveen.bumblebeebackend.controller;

import com.dinukakaveen.bumblebeebackend.exception.UserNotFoundException;
import com.dinukakaveen.bumblebeebackend.model.Purchase;
import com.dinukakaveen.bumblebeebackend.repository.PurchaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class PurchaseController {

    @Autowired
    private PurchaseRepository purchaseRepository;

    @GetMapping("/Purchase/{userId}/{status}")
    public List<Purchase> getPurchaseByStatus(@PathVariable Integer userId,
                                              @PathVariable String status){
        return purchaseRepository.findByUserIdAndStatus(userId, status);
    }

    @GetMapping("/Purchase/{id}")
    Purchase getPurchaseById(@PathVariable Integer id){
        return purchaseRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
    }

    @PutMapping("/UpdatePurchase/{id}")
    Purchase updatePurchase(@RequestBody Purchase updatePurchase, @PathVariable Integer id){
        return purchaseRepository.findById(id)
                .map(purchase -> {
                    purchase.setPaid_amount(updatePurchase.getPaid_amount());
                    purchase.setPending_amount((updatePurchase.getPending_amount()));
                    purchase.setInstallment_state(updatePurchase.getInstallment_state());
                    purchase.setStatus(updatePurchase.getStatus());

                    return purchaseRepository.save(purchase);
                }).orElseThrow(() -> new UserNotFoundException(id));
    }
}
