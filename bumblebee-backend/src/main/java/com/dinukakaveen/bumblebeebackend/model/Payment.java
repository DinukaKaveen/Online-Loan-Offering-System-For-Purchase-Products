package com.dinukakaveen.bumblebeebackend.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.math.BigDecimal;

@Entity
public class Payment {

    @Id
    @GeneratedValue
    private Integer payment_id;
    private Integer purchase_id;
    private Integer product_id;
    private String product_name;
    private Integer user_id;
    private BigDecimal payment_amount;
    private String installment_state;
    private String remarks;

    public Integer getPayment_id() {
        return payment_id;
    }

    public void setPayment_id(Integer payment_id) {
        this.payment_id = payment_id;
    }

    public Integer getPurchase_id() {
        return purchase_id;
    }

    public void setPurchase_id(Integer purchase_id) {
        this.purchase_id = purchase_id;
    }

    public Integer getProduct_id() {
        return product_id;
    }

    public void setProduct_id(Integer product_id) {
        this.product_id = product_id;
    }

    public String getProduct_name() {
        return product_name;
    }

    public void setProduct_name(String product_name) {
        this.product_name = product_name;
    }

    public Integer getUser_id() {
        return user_id;
    }

    public void setUser_id(Integer user_id) {
        this.user_id = user_id;
    }

    public BigDecimal getPayment_amount() {
        return payment_amount;
    }

    public void setPayment_amount(BigDecimal payment_amount) {
        this.payment_amount = payment_amount;
    }

    public String getInstallment_state() {
        return installment_state;
    }

    public void setInstallment_state(String installment_state) {
        this.installment_state = installment_state;
    }

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}
