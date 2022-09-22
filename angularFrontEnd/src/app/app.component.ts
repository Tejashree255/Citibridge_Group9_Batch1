import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('btnid')
  btnid!: ElementRef;
  title = 'loginModule';
  constructor(private router: Router) { }
  btnval="Login";
  openlogin()
  {
  this.gotoLogin();
  }
  gotoLogin() {
    this.router.navigate(['/login']);
  }
  setSaving(){
    this.btnval="Logged In!";
   }
}
