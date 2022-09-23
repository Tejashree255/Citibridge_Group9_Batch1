import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StockserviceService } from '../stockservice.service';

@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.css']
})
export class SectorComponent implements OnInit {

  constructor(private router: Router,private stockService: StockserviceService) { }
  //public sectorname:string = 'null';
  //public showstks:boolean = false;
  ngOnInit(): void {
    
  }
  
  
  gotostocks(s:string)
  {
    this.stockService.showstks=true;
     this.router.navigate([`/${s}`]);
   
  }
  showstocks(sector: string)
  {
   this.stockService.sectorname=sector;
  
   this.gotostocks(sector);
  }
  
}
