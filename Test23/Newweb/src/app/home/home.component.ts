import { Component, OnInit } from '@angular/core';
import {ProductService }from '../service/product.service';
import {Router}from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

item=[];
errMsag=""

  constructor(private productSV:ProductService,
    private route:Router) { }

  ngOnInit() {
    this.ferchData();
  }

  ferchData(){
this.productSV.getProduct()
.subscribe(data=>this.item=data,error=> this.errMsag = error);
  }
  
  
  gotoCreateProduct(){
    this.route.navigate(['/','create-product']);
  }

  gotoBmiProduct(){
    this.route.navigate(['/','bmi-product']);
  }


  delete(item){
 let data = {
  personID: item
 };

 this.productSV
 .deleteProduct(data)
 .then(() => {
   this.ferchData();
 })
 .catch(err => this.errMsag = err
  );
 }
}
