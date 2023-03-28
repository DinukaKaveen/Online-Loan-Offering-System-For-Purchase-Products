package com.bumblebee.backend.controller;

import com.bumblebee.backend.exception.UserNotFoundException;
import com.bumblebee.backend.model.User;
import com.bumblebee.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000") //connect back-end with front-end
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping ("/RegisterCustomer")
    User newUser(@RequestBody User newUser){
        return userRepository.save(newUser);
    }

    @GetMapping("/admin/Users")
    List<User> getAllUsers(){
        return userRepository.findAll();
    }

    @GetMapping("/admin/User/{id}")
    User getUserById(@PathVariable Integer id){
        return userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
    }

}
