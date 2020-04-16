import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from "./components/view/home/home/home.component";
import { ProductCrudComponent} from "./components/view/product-crud/product-crud.component";


const routes: Routes = [
  //priomeira rota
{
path: "",
component:HomeComponent
},
//______________________________
//segunda rota 

{
  path:"products",
  component:ProductCrudComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
