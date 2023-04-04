package com.dinukakaveen.bumblebeebackend.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.math.BigDecimal;

@Entity
public class Purchase {

    @Id
    @GeneratedValue
    private Integer purchase_id;
    private Integer product_id;
    private Integer userId;
    private Integer qty;
    private BigDecimal purchase_amount;
    private BigDecimal paid_amount;
    private BigDecimal pending_amount;
    private String status;
    private String installment_state;

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

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Integer getQty() {
        return qty;
    }

    public void setQty(Integer qty) {
        this.qty = qty;
    }

    public BigDecimal getPurchase_amount() {
        return purchase_amount;
    }

    public void setPurchase_amount(BigDecimal purchase_amount) {
        this.purchase_amount = purchase_amount;
    }

    public BigDecimal getPaid_amount() {
        return paid_amount;
    }

    public void setPaid_amount(BigDecimal paid_amount) {
        this.paid_amount = paid_amount;
    }

    public BigDecimal getPending_amount() {
        return pending_amount;
    }

    public void setPending_amount(BigDecimal pending_amount) {
        this.pending_amount = pending_amount;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getInstallment_state() {
        return installment_state;
    }

    public void setInstallment_state(String installment_state) {
        this.installment_state = installment_state;
    }
}
