import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { StockserviceService } from './stockservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'loginModule';
  constructor(private router: Router,private stockService: StockserviceService) { 
    //this.stockService.setbtnc("Login");
  }
  showbtnlogin:boolean = true;
  showbtnlogout:boolean = false;;
  openlogin()
  {
  this.showbtnlogin=false;
  this.showbtnlogout=true;  
  this.gotoLogin();
  }
  gotoLogin() {
    this.router.navigate(['/login']);
  }
  openlogout() {
    this.showbtnlogin=true;
  this.showbtnlogout=false;
    this.router.navigate(['/logout']);
  }
close() {
  this.showbtnlogin=false;
  this.showbtnlogout=true;
  this.router.navigate(['/tasks']);
}
  
}
