package com.bumblebee.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

import java.sql.Date;

@Entity
public class User {

    @Id
    @GeneratedValue
    private Long id;
    private String first_name;
    private String last_name;
    private java.util.Date date_of_birth;
    private String nic;
    private Integer mobile_no;
    private String email;
    private String password;
    private String confirm_password;

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    public String getFirst_name() {
        return first_name;
    }
    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }
    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public java.util.Date getDate_of_birth() {return date_of_birth;}
    public void setDate_of_birth(Date date_of_birth) { this.date_of_birth = date_of_birth; }

    public String getNic() {return nic;}
    public void setNic(String nic) {this.nic = nic;}

    public Integer getMobile_no() {return mobile_no;}
    public void setMobile_no(Integer mobile_no) {this.mobile_no = mobile_no;}

    public String getEmail() {return email;}
    public void setEmail(String email) {this.email = email;}

    public String getPassword() {return password;}
    public void setPassword(String password) {this.password = password;}

    public String getConfirm_password() {return confirm_password;}
    public void setConfirm_password(String confirm_password) {this.confirm_password = confirm_password;}
}
