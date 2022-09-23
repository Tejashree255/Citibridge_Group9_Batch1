import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private baseUrl= "http://localhost:8081/stock/poststocks";
  private baseUrl1= "http://localhost:8081/stock/stocks";
  constructor(private http: HttpClient) { }

  getAllStock(userId:string):Observable<any>{
    return this.http.get( ` ${this.baseUrl1}?userId=${userId} `);
  }

  create(data: any):Observable<any>
  {
    return this.http.post(this.baseUrl,data);
  }

}
