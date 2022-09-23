package com.example.springboot.demo.citibridge.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.springboot.demo.citibridge.entity.User;

//import com.example.springboot.demo.citibridge.studententity.User;


@Repository
public interface UserRepo extends  JpaRepository<User,String>{
	
User findByUserId(String userId);
}
 