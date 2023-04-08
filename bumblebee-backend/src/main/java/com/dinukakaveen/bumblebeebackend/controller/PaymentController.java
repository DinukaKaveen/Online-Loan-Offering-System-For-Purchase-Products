package com.dinukakaveen.bumblebeebackend.controller;

import com.dinukakaveen.bumblebeebackend.model.Payment;
import com.dinukakaveen.bumblebeebackend.repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.math.BigDecimal;

@RestController
@CrossOrigin("http://localhost:3000")
public class PaymentController {

    @Autowired
    private PaymentRepository paymentRepository;

    @PostMapping("/NewPayment")
    public ResponseEntity<String> uploadPayment(@RequestParam("payment_amount") BigDecimal payment_amount,
                                                @RequestParam("installment_state") String installment_state,
                                                @RequestParam("remarks") String remarks,
                                                @RequestParam("product_id") Integer product_id,
                                                @RequestParam("product_name") String product_name,
                                                @RequestParam("purchase_id") Integer purchase_id,
                                                @RequestParam("user_id") Integer user_id) throws IOException{
        Payment upload = new Payment();

        upload.setPayment_amount(payment_amount);
        upload.setInstallment_state(installment_state);
        upload.setRemarks(remarks);
        upload.setProduct_id(product_id);
        upload.setProduct_name(product_name);
        upload.setPurchase_id(purchase_id);
        upload.setUser_id(user_id);

        paymentRepository.save(upload);
        return new ResponseEntity<>("Payment Created Successfully", HttpStatus.OK);
    }
}
