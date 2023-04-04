package com.dinukakaveen.bumblebeebackend.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Payment {

    @Id
    @GeneratedValue
    private Integer payment_id;
    private Integer purchase_id;
    private Integer product_id;
    private Integer user_id;
    
}
