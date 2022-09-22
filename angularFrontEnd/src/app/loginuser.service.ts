import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginuserService {
 private baseUrl= "http://localhost:8081/user/login";
  constructor(private httpClient:HttpClient) { }
 
  
  username:string="";
  getUsername():string 
  { 
    return this.username;
   }
  loginUser(user: User):Observable<object> {
    console.log(user)
    this.username = user.userId;
 return this.httpClient.post(` ${this.baseUrl} `,user);
  }
 
}
