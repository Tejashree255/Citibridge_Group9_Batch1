import { NgModule } from '@angular/core';
import { RouterModule, Routes ,Router} from '@angular/router';
import { LogoutComponent } from './logout/logout.component';


//import { ProductDetailsComponent } from './product-details/product-details.component';
import { SectorComponent } from './sector/sector.component';
import { ShowstocksComponent } from './showstocks/showstocks.component';
import { StockdetailsComponent } from './stockdetails/stockdetails.component';
import { TaskdetailsComponent } from './taskdetails/taskdetails.component';
import { UserLoginComponent } from './user-login/user-login.component';
const routes: Routes = [
  {path:"login" ,component: UserLoginComponent},
  {path:"logout" ,component: LogoutComponent},
  {path:"tasks" ,component: TaskdetailsComponent},
  {path:"sectors" ,component: SectorComponent},
  
  {path:"Power" ,component: StockdetailsComponent},
  {path:"Fast Moving Consumer Goods" ,component: StockdetailsComponent},
  {path:"Construction" ,component: StockdetailsComponent},
  {path:"Automobile and Auto Components" ,component: StockdetailsComponent},
  {path:"Telecommunication" ,component: StockdetailsComponent},
  {path:"Chemicals" ,component: StockdetailsComponent},
  {path:"Services" ,component: StockdetailsComponent},
  {path:"Construction Materials" ,component: StockdetailsComponent},
  {path:"Consumer Durables" ,component: StockdetailsComponent},
  {path:"Oil Gas & Consumable Fuels" ,component: StockdetailsComponent},
  {path:"Metals & Mining" ,component: StockdetailsComponent},
  {path:"Healthcare" ,component: StockdetailsComponent},
  {path:"Information Technology" ,component: StockdetailsComponent},
  {path:"Financial Services" ,component: StockdetailsComponent},
  {path:"prevtables" ,component:   ShowstocksComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//export const routingComponent = [ProductDetailsComponent];