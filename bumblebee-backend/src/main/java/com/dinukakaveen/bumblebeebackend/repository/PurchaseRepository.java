package com.dinukakaveen.bumblebeebackend.repository;

import com.dinukakaveen.bumblebeebackend.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PurchaseRepository extends JpaRepository<Product,Integer> {
}
