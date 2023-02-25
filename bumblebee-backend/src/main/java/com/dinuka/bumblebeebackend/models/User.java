package com.dinuka.bumblebeebackend.models;

import jakarta.persistence.Entity;

import java.util.Date;

@Entity //automatically generate table
public class User {

    private Long user_id;
    private String first_name;
    private String last_name;
    private Date date_of_birth;
    private String phone_no;
    private String nic;
    private String email;
    private String address;
    private String password;
}
