import { Component, EventEmitter, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { LoginuserService } from '../loginuser.service';
import { StockserviceService } from '../stockservice.service';
import { User } from '../user';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  user:User = new User();
  public showPassword: boolean = false;

  //showPassword = false;
  //show = false;
  constructor(private renderer: Renderer2,
    private loginuserService: LoginuserService,private router: Router,private stockService: StockserviceService) { }
  //@ViewChild(AppComponent) child!: AppComponent;
  ngOnInit(): void {
    
  }
  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
 
  
  userLogin()
  {
    //this.stockService.setbtnc("Logged In!");
    this.loginuserService.loginUser(this.user)
    .subscribe(data=>{ this.gotoList();
    },error=>alert('Sorry! Enter correct username and password!'))
   
  }
  gotoList() {
    this.router.navigate(['/tasks']);
  }
  
  // userLogin(){
  //   console.log(this.user)
  //   this.loginuserService.loginUser(this.user).
  //   subscribe(data=>{alert('User login successful!!')
  // },error=>alert('Sorry! Enter correct username and password!'));
  // }

}
