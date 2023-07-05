package com.nexus.nexus.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.nexus.nexus.model.Category;


public interface CategoryRepository extends JpaRepository<Category, Long> {
}
