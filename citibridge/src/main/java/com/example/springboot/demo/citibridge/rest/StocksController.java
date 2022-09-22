package com.example.springboot.demo.citibridge.rest;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.springboot.demo.citibridge.entity.StockClass;
//import com.example.springboot.demo.citibridge.entity.Stock;
import com.example.springboot.demo.citibridge.repository.UserRepository;
//import com.example.springboot.demo.citibridge.studententity.Student;

@CrossOrigin("http://localhost:4200/")
@RestController
@RequestMapping("stock")
public class StocksController {

	@Autowired
	UserRepository userRepository;

	  @GetMapping("/stocks")
	  public ResponseEntity<List<StockClass>> getAllSavedStocks(@RequestParam(required = false) String userId) {
		  try
			{
			  List<StockClass> stocks=new ArrayList<StockClass>();
			  if(userId==null)
			  {
				  System.out.println("null userId has been got!");
				  userRepository.findAll().forEach(stocks::add);
			  }
			  else
			  {
				  userRepository.findStocksByUserId(userId).forEach(stocks::add);
			  }
			  
			  if(stocks.isEmpty())
			  {
				  return new ResponseEntity<>(HttpStatus.NO_CONTENT); 
			  }
			  
				return new ResponseEntity<>(stocks,HttpStatus.OK); 
						
			}
			catch(Exception e) {
				return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR); 
			}
	  }
	  
	  @PostMapping("/poststocks")
	  public ResponseEntity<StockClass> createTutorial(@RequestBody StockClass stock) {
		try
		{
			StockClass _stock=userRepository.save(new StockClass(stock.getUserId(),stock.getName(),stock.getTickers(),
					stock.getChange(),stock.getPrice(),stock.getDate()));
			System.out.println(_stock.getDate());
			return new ResponseEntity<>(_stock,HttpStatus.CREATED); 
					
		}
		catch(Exception e) {
			return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR); 
		}
	    
	  }
	  
	  
}
