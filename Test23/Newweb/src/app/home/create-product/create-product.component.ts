import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validator, Validators}from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../../service/product.service';
import{AlertService} from '../../service/alert.service';
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})

export class CreateProductComponent implements OnInit {
errorMsg:string;
form:FormGroup;
  constructor(private builder:FormBuilder,
    private router:Router,
    private productSV:ProductService,
    private activatedRouter:ActivatedRoute,
    private alertSV: AlertService) {this.initailCreateFormData()}
      
  ngOnInit() {
  }
private initailCreateFormData(){
this.form = this.builder.group({
  PERSION_NUMBER:['',Validators.required],
  INITIAL_CODE:['',Validators.required],
  NAME:['',Validators.required],
  LASTNAME_CODE:['',Validators.required],
  GENDER:['',Validators.required],
  AGE:['',Validators.required]
});


}

onSubmit(){
//console.log(this.form.value)
  if(this.form.invalid){
console.log("เกิดข้อผิดพลาด");

}

console.log(JSON.stringify(this.form.value));
this.productSV
.createProduct(JSON.stringify(this.form.value))
.then(res=>{


  this.router.navigate(['/','home']);
})
.catch(err => this.errorMsg= err);



}



}
