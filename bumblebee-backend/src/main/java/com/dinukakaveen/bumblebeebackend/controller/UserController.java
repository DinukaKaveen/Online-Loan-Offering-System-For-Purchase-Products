package com.dinukakaveen.bumblebeebackend.controller;

import com.dinukakaveen.bumblebeebackend.exception.UserNotFoundException;
import com.dinukakaveen.bumblebeebackend.model.User;
import com.dinukakaveen.bumblebeebackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000") //connect back-end with front-end
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/RegisterCustomer")
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

    @PutMapping("/admin/EditUser/{id}")
    User updateUser(@RequestBody User newUser, @PathVariable Integer id){
        return userRepository.findById(id)
                .map(user -> {
                    user.setFirst_name(newUser.getFirst_name());
                    user.setLast_name((newUser.getLast_name()));
                    user.setDate_of_birth((newUser.getDate_of_birth()));
                    user.setNic((newUser.getNic()));
                    user.setAddress((newUser.getAddress()));
                    user.setEmail((newUser.getEmail()));
                    user.setMobile_no((newUser.getMobile_no()));

                    return userRepository.save(user);
                }).orElseThrow(() -> new UserNotFoundException(id));
    }

    @DeleteMapping("/admin/DeleteUser/{id}")
    String deleteUser(@PathVariable Integer id){
        if (!userRepository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return "User with id "+id+" has been deleted successfully";
    }
}
