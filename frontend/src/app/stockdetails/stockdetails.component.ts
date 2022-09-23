import { Component, Inject, Input, OnInit } from '@angular/core';
import { Stock } from '../stock';
import { StockserviceService } from '../stockservice.service';
import { StockService } from '../stock.service';
import { LoginuserService } from '../loginuser.service';
import { Router } from '@angular/router';
//import { DOCUMENT } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-stockdetails',
  templateUrl: './stockdetails.component.html',
  styleUrls: ['./stockdetails.component.css']
})
export class StockdetailsComponent implements OnInit {
  stockdata:Stock[] = [];//list of stocks
  stocks:Stock[] = [];//from db
  isSaved:boolean = false;
  saved:boolean = false;
  savederr:boolean = false;
  constructor(public dialog: MatDialog,
    private SpinnerService: NgxSpinnerService,
    private stockService: StockserviceService,private router:Router,private sService: StockService,private loginuserService: LoginuserService) { }
  //sectorname:string="Power";
  username:String=this.loginuserService.getUsername();
  

  ngOnInit(): void {
    this.SpinnerService.show();  
    this.stockService.getStudentsfinance().subscribe((data:Stock[]) => {
      console.log(data);
     
      this.stockdata=data;
      this.SpinnerService.hide();  
    });

    
  }
  

  
  gototasks()
  {
    this.router.navigate(['/tasks']);
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
      // alert('Data saved successfully!!')
      this.saved=true;
      this.savederr=false;
     },
     
   );
    }//if
    else{
      this.saved=false;
      this.savederr=true;
     // alert('Stock details are saved already!')
    }
  }//fun

}




