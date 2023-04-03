package com.dinukakaveen.bumblebeebackend.repository;


import com.dinukakaveen.bumblebeebackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository <User,Integer>{

    User findByUsername(String username);
}
