package com.dinuka.bumblebeebackend.model;

import jakarta.persistence.Entity;

import java.util.Date;

@Entity
public class User {

    private Long id;
    private String first_name;
    private String last_name;
    private Date date_of_birth;
    private String nic;
    private String email;
    private String address;
    private String password;
    
}
