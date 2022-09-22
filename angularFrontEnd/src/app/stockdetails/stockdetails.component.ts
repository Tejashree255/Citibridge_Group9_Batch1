import { Component, Input, OnInit } from '@angular/core';
import { Stock } from '../stock';
import { StockserviceService } from '../stockservice.service';
import { StockService } from '../stock.service';
import { LoginuserService } from '../loginuser.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-stockdetails',
  templateUrl: './stockdetails.component.html',
  styleUrls: ['./stockdetails.component.css']
})
export class StockdetailsComponent implements OnInit {
  stockdata:Stock[] = [];//list of stocks
  stocks:Stock[] = [];//from db
  isSaved:boolean = false;
  //username
  // stocks:Stock={
  //   id: 0,
  //   name: '',
  //   price: undefined,
  //   change: undefined,
  //   currency: '',
  //   bid: undefined,
  //   userId: ''
  // };
  constructor(private stockService: StockserviceService,private router:Router,private sService: StockService,private loginuserService: LoginuserService) { }
  //sectorname:string="Power";
  username:String=this.loginuserService.getUsername();
  
  ngOnInit(): void {
    this.stockService.getStudentsfinance().subscribe((data:Stock[]) => {
      console.log(data);
      this.stockdata=data;
    })
  }

  checkIfCompanyStocksAreSaved(companyname: string):boolean {
  //let isSaved=false;
  let username1=this.loginuserService.getUsername();
  this.sService.getAllStock(username1).subscribe(
  data=>
  {
    this.stocks=data;
    console.log(data);
  },error=> 
  {console.log(error);
  }
  );
  
  //cheack in this.stocks
  const stockpresentalready = this.stocks.find((obj1) => {
    return obj1.name==companyname && obj1.userId==username1; ;
  });
  if(stockpresentalready!=null){
    this.isSaved=true;
  }
  else{
    this.isSaved=false;
  }
   return this.isSaved;
  }

  
  savestocks(companyname: string):void {
    if(this.checkIfCompanyStocksAreSaved(companyname)==false)
    {
      const stockwithcompanyname = this.stockdata.find((obj) => {
      return obj.name==companyname ;
    });
    if(stockwithcompanyname!=null)
    {
      
      console.log(this.username);
      //console.log(this.idcnt);
     // stockwithcompanyname.id=this.idcnt;
     stockwithcompanyname.userId=this.username; 
    }
   console.log(stockwithcompanyname);
  // const data =stockwithcompanyname;
   this.sService.create(stockwithcompanyname).subscribe(
     response => {
       console.log(response);
       alert('Data saved successfully!!')
     },
     error =>
     {
      console.log(error);
     } 
   );
    }//if
    else{
      alert('Stock details are saved already!')
    }
  }//fun

 
}
 

