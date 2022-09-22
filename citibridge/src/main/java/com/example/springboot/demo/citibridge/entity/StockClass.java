package com.example.springboot.demo.citibridge.entity;




import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

@Entity
@Table(name="users")
public class StockClass {
	
@Id
@GeneratedValue(strategy = GenerationType.AUTO)
public long id;


private String userId;//user name


@Column(name="name")//company name
private String name; 

@Column(name="price")
private float price;	

@Column(name="change")
private float change;
private String tickers;
private String date;
private String currency;
private BigDecimal bid;

public StockClass()
{
	
}
public StockClass(String name, float change,float price) {
	super();
	this.name = name;
	this.change= change;
	this.price=price;
	
}
public StockClass(String userId,String name,String tickers, float change,float price,String date) {
	super();
	
	this.userId=userId;
	this.name = name;
	this.tickers=tickers;
	this.change= change;
	this.price=price;
	this.date=date;
}

public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public String getTickers() {
	return tickers;
}
public void setTickers(String tickers) {
	this.tickers = tickers;
}
public long getId() {
	return id;
}
public void setId(long id) {
	this.id = id;
}

public String getDate() {
	return date;
}
public void setDate(String date) {
	this.date = date;
}
public float getPrice() {
	return price;
}
public String getUserId() {
	return userId;
}
public void setUserId(String userId) {
	this.userId = userId;
}
public void setPrice(float price) {
	this.price = price;
}
public float getChange() {
	return change;
}
public void setChange(float change) {
	this.change = change;
}
public String getCurrency() {
	return currency;
}
public void setCurrency(String currency) {
	this.currency = currency;
}
public BigDecimal getBid() {
	return bid;
}
public void setBid(BigDecimal bid) {
	this.bid = bid;
}



}


