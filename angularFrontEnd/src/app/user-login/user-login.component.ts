import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { LoginuserService } from '../loginuser.service';
import { User } from '../user';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  user:User = new User();
 
  constructor(private renderer: Renderer2,
    private loginuserService: LoginuserService,private router: Router) { }
  @ViewChild(AppComponent) child!: AppComponent;
  ngOnInit(): void {
  }
  userLogin()
  {
   // this.renderer.setStyle(this.child.btnid , 'visibility' , 'hidden');
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
