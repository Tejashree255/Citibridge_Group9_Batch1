import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginuserService } from '../loginuser.service';
import { Stock } from '../stock';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-showstocks',
  templateUrl: './showstocks.component.html',
  styleUrls: ['./showstocks.component.css']
})
export class ShowstocksComponent implements OnInit {
  stocks: Stock[]= [];
  username: string ="";
  datapresent=false;
  hide=false;
  constructor(private sService: StockService,private loginuserService: LoginuserService,private router: Router) { }

  ngOnInit(): void {
    
this.username=this.loginuserService.getUsername();
this.sService.getAllStock(this.username).subscribe(
  data=>
  {
    if(data!=null)
    {
      this.stocks=data;
      this.datapresent=true;
      this.hide=false;
      console.log(data);
    }
    else
   {
     this.hide=true;
    console.log("stocks not found");
    }
    
  },error=> 
  {
   
    console.log(error);
  }
  );
  }
  gototasks()
  {
    this.router.navigate(['/tasks']);
  }

  
  

}
