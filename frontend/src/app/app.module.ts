import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import {HttpClientModule} from '@angular/common/http';
//import { ProductDetailsComponent } from './product-details/product-details.component';
import { SectorComponent } from './sector/sector.component';
import { StockdetailsComponent } from './stockdetails/stockdetails.component';
import { ShowstocksComponent } from './showstocks/showstocks.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { AddstocksComponent } from './addstocks/addstocks.component';
import { MatSliderModule } from '@angular/material/slider';
//import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
//import { MaterialModule } from './material/material.module';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from "@angular/material/button";
//import { MatMenuModule } from "@angular/material/menu";
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule, } from "@angular/material/toolbar";
import { MatInputModule } from "@angular/material/input";
import { MatDialogModule } from "@angular/material/dialog";
import { MatTableModule } from "@angular/material/table";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { TaskdetailsComponent } from './taskdetails/taskdetails.component';
import { LogoutComponent } from './logout/logout.component';
import { NgxSpinnerModule } from 'ngx-spinner';
//import { SavedialogComponent } from './savedialog/savedialog.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    TaskdetailsComponent,
    SectorComponent,
    StockdetailsComponent,
    ShowstocksComponent,
    LogoutComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
     HttpClientModule,
     BrowserAnimationsModule,
     NgxSpinnerModule ,
     MatToolbarModule,
  MatButtonModule, 
  MatCardModule,
  MatInputModule,
  MatDialogModule,
  MatTableModule,
  MatMenuModule,
  MatIconModule,
  MatProgressSpinnerModule,
    
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
