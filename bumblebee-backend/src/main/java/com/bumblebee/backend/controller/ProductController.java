package com.bumblebee.backend.controller;

import com.bumblebee.backend.exception.UserNotFoundException;
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

    @PostMapping("/admin/NewProduct")
    Product newProduct(@RequestBody Product newProduct) {
        return ProductRepository.save(newProduct);
    }

    @GetMapping("/admin/Products")
    List<Product> getAllProducts() {
        return ProductRepository.findAll();
    }

    @GetMapping("/admin/Product/{id}")
    Product getProductById(@PathVariable Integer id) {
        return ProductRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
    }

    @PutMapping("/admin/EditProduct/{id}")
    Product updateProduct(@RequestBody Product newProduct, @PathVariable Integer id) {
        return ProductRepository.findById(id)
                .map(product -> {
                    product.setProduct_code(newProduct.getProduct_code());
                    product.setProduct_name(newProduct.getProduct_name());
                    product.setPrice(newProduct.getPrice());
                    product.setQty(newProduct.getQty());
                    product.setMain_category(newProduct.getMain_category());
                    product.setSub_category(newProduct.getSub_category());
                    product.setWarranty(newProduct.getWarranty());
                    product.setSupplier_id(newProduct.getSupplier_id());
                    product.setStatus(newProduct.getStatus());

                    return ProductRepository.save(product);
                }).orElseThrow(() -> new UserNotFoundException(id));
    }

    @DeleteMapping("/admin/DeleteProduct/{id}")
    String deleteProduct(@PathVariable Integer id) {
        if (!ProductRepository.existsById(id)) {
            throw new UserNotFoundException(id);
        }
        ProductRepository.deleteById(id);
        return "User with id " + id + " has been deleted successfully";
    }
}
