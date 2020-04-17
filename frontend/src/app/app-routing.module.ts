import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from "./components/view/home/home/home.component";
import { ProductCrudComponent} from "./components/view/product-crud/product-crud.component";
import{ProductCreateComponent} from "./components/view/product-create/product-create.component";



const routes: Routes = [
  //priomeira rota
{
path: "",
component: HomeComponent
},
//______________________________
//segunda rota 

{
  path:"products",
  component:ProductCrudComponent
  },

  {
   path:"products/crete",

   component:ProductCreateComponent

  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
