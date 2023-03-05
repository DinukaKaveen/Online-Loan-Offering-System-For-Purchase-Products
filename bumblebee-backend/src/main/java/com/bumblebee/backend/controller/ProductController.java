package com.bumblebee.backend.controller;

import com.bumblebee.backend.model.User;
import com.bumblebee.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:3000")
public class ProductController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("admin/Products")
    User newProduct(@RequestBody User newProduct){
        return userRepository.save(newProduct);
    }
}
