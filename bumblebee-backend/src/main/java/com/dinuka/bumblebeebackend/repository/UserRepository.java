package com.dinuka.bumblebeebackend.repository;

import com.dinuka.bumblebeebackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}
