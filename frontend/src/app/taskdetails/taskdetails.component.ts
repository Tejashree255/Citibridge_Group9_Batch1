import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-taskdetails',
  templateUrl: './taskdetails.component.html',
  styleUrls: ['./taskdetails.component.css']
})
export class TaskdetailsComponent implements OnInit {

  constructor(private router: Router) { }
  show=false;
  showprev=false;
  ngOnInit(): void {
  }

  opensectors()
  {
  this.gotoSectors();
  
  }
  gotoSectors() {
    this.showprev=false;
    this.show=true;

   // this.router.navigate(['/sectors']);
  }

  openarchives()
  {
  this.gotoArchives();
  }
  gotoArchives() {
     this.show=false;
      this.showprev=true;
    
    
    //this.router.navigate(['/prevtables']);
  }

}
