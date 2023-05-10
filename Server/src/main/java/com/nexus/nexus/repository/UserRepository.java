package com.nexus.nexus.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.nexus.nexus.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
}
