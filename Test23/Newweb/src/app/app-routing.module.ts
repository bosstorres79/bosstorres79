import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import {CreateProductComponent} from './home/create-product/create-product.component';
import { HomeComponent} from './home/home.component';
import { BmiProductComponent } from './home/bmi-product/bmi-product.component';

const routes:Routes=[
{path:'',redirectTo:'/home',pathMatch:'full'},
{path:'home',component:HomeComponent},
{path:'create-product',component:CreateProductComponent},
{path:'bmi-product',component:BmiProductComponent}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
