import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from './stock';

@Injectable({
  providedIn: 'root'
})
export class StockserviceService {
  sectorname:string='null';
  getSectorname():string 
  { 
    return this.sectorname;
   }
  setSectorname(value:string) {
     this.sectorname=value;
    }
  private baseUrl="http://localhost:8081/api";
  constructor(private http: HttpClient) { }
  getStudentsfinance():Observable<Stock[]>{
    return this.http.get<Stock[]>(` ${this.baseUrl}/${this.sectorname} `);
  }
}
