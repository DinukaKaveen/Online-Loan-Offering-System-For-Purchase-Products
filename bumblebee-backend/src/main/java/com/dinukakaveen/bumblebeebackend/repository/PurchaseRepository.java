package com.dinukakaveen.bumblebeebackend.repository;

import com.dinukakaveen.bumblebeebackend.model.Purchase;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PurchaseRepository extends JpaRepository<Purchase,Integer> {
    List<Purchase> findByUserIdAndStatus(Integer userId, String status);
}
