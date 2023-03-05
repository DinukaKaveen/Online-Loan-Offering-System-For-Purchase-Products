package com.bumblebee.backend.controller;

import com.bumblebee.backend.model.Product;
import com.bumblebee.backend.model.User;
import com.bumblebee.backend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class ProductController {

    @Autowired
    private ProductRepository ProductRepository;

    @PostMapping("admin/NewProduct")
    Product newProduct(@RequestBody Product newProduct){
        return ProductRepository.save(newProduct);
    }

    @GetMapping("/admin/Products")
    List<Product> getAllUsers(){
        return ProductRepository.findAll();
    }
}
