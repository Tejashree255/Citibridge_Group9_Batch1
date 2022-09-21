package com.example.springboot.demo.citibridge.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.springboot.demo.citibridge.entity.StockClass;

//import com.example.springboot.demo.citibridge.studententity.Student;

@Repository
public interface UserRepository extends JpaRepository<StockClass,Long>{//users stocks table
	List<StockClass> findStocksByUserId(String userId);
	 // List<Student> findByTitleContaining(String title);
}
