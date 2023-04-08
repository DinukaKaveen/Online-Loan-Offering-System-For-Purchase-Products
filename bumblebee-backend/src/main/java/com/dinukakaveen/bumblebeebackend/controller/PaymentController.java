package com.dinukakaveen.bumblebeebackend.controller;

import com.dinukakaveen.bumblebeebackend.model.Payment;
import com.dinukakaveen.bumblebeebackend.model.Purchase;
import com.dinukakaveen.bumblebeebackend.model.User;
import com.dinukakaveen.bumblebeebackend.repository.PaymentRepository;
import com.dinukakaveen.bumblebeebackend.repository.PurchaseRepository;
import com.dinukakaveen.bumblebeebackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:3000")
public class PaymentController {

    @Autowired
    private PaymentRepository paymentRepository;

    @PostMapping("/NewPayment")
    Payment newPayment(@RequestBody Payment newPayment){
        return paymentRepository.save(newPayment);
    }
}
