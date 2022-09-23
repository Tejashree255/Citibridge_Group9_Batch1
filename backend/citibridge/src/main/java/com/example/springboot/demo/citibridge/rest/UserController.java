package com.example.springboot.demo.citibridge.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springboot.demo.citibridge.entity.User;
import com.example.springboot.demo.citibridge.repository.UserRepo;



@CrossOrigin("http://localhost:4200/")
@RestController
@RequestMapping("user")
public class UserController {
	@Autowired
	private UserRepo repo;

	@PostMapping("/login")
	public ResponseEntity<?> loginUser(@RequestBody User userData)
	{
		System.out.println(userData.getUserId()+": "+userData.getPassword());
		
		//check whether user is authorized user or not?
		User user=repo.findByUserId(userData.getUserId());
		if(user.getPassword().equals(userData.getPassword()))
		{
			return ResponseEntity.ok(user);
		}
		else
		return (ResponseEntity<?>)ResponseEntity.badRequest();

	}
}   