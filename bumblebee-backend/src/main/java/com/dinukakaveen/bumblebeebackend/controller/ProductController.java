package com.dinukakaveen.bumblebeebackend.controller;

import com.dinukakaveen.bumblebeebackend.exception.UserNotFoundException;
import com.dinukakaveen.bumblebeebackend.model.Product;
import com.dinukakaveen.bumblebeebackend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class ProductController {

    @Autowired
    private ProductRepository ProductRepository;

    @PostMapping("/admin/NewProduct")
    public ResponseEntity<String> uploadData(@RequestParam("product_code") String product_code,
                                             @RequestParam("product_name") String product_name,
                                             @RequestParam("price") String price,
                                             @RequestParam("qty") Integer qty,
                                             @RequestParam("main_category") String main_category,
                                             @RequestParam("sub_category") String sub_category,
                                             @RequestParam("warranty") String warranty,
                                             @RequestParam("supplier_id") String supplier_id,
                                             @RequestParam("status") String status,
                                             @RequestParam("image") MultipartFile image) throws IOException {

        Product upload = new Product();

        upload.setProduct_code(product_code);
        upload.setProduct_name(product_name);
        upload.setPrice(price);
        upload.setQty(qty);
        upload.setMain_category(main_category);
        upload.setSub_category(sub_category);
        upload.setWarranty(warranty);
        upload.setSupplier_id(supplier_id);
        upload.setStatus(status);
        upload.setImage(image.getBytes());

        ProductRepository.save(upload);
        return new ResponseEntity<>("Image uploaded successfully", HttpStatus.OK);
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
