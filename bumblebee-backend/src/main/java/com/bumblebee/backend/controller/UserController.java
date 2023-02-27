package com.bumblebee.backend.controller;

import com.bumblebee.backend.model.User;
import com.bumblebee.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import java.util.List;

@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping ("/RegisterCustomer")
    User newUser(@RequestBody User newUser){
        return userRepository.save(newUser);

    }

}
