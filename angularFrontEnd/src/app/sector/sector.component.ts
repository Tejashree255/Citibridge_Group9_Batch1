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
  public sectorname:string = 'null';
  show:boolean = false;
  ngOnInit(): void {
  }
  showstocks(sectorname: string)
  {
   this.stockService.setSectorname(sectorname);
   this.gotostocks(sectorname);
  }

  gotostocks(s:string)
  {
    console.log(this.show);
    this.router.navigate([`/${s}`])
    this.show=false;
  }
  
}
