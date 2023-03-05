package com.bumblebee.backend.controller;

import com.bumblebee.backend.model.Product;
import com.bumblebee.backend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:3000")
public class ProductController {

    @Autowired
    private ProductRepository ProductRepository;

    @PostMapping("admin/NewProduct")
    Product newProduct(@RequestBody Product newProduct){
        return ProductRepository.save(newProduct);
    }
}
