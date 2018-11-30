import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators, } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../service/product.service';
import { AlertService } from '../../service/alert.service';


@Component({
  selector: 'app-bmi-product',
  templateUrl: './bmi-product.component.html',
  styleUrls: ['./bmi-product.component.css']
})
export class BmiProductComponent implements OnInit {
  persionID: string;
  errorMsg: string;
  form: FormGroup;

  constructor(
    private activatedRouter: ActivatedRoute,
    private builder: FormBuilder,
    private router: Router,
    private alert: AlertService,
    private personSV: ProductService,
  ) {
    this.CrateForm();
    this.activatedRouter.params.forEach(
      params => {
        this.persionID = params.id;
        this.form.controls['PERSION_CODE'].setValue(this.persionID);
      }
    );
  }

  ngOnInit() {
  }
  private CrateForm() {
    this.form = this.builder.group({
      WEIGHT: ['', [Validators.required]],
      HEIGHT: ['', [Validators.required]],
      RESULT: [''],
      PERSION_CODE: [''],
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      console.log(this.form.value);
      this.alert.notify('ข้อมูลไม่ครบ', 'error');
    } else if (Number(this.form.get('WEIGHT').value) <= 0
      || Number(this.form.get('WEIGHT')) === NaN) {
      this.alert.notify('น้ำหนักไม่ถูกต้อง', 'error');
    } else if (Number(this.form.get('HEIGHT').value) <= 0
      || Number(this.form.get('HEIGHT')) === NaN) {
      this.alert.notify('ส่วนสูงไม่ถูกต้อง', 'error');
    } else {
      const weigth = Number(this.form.get('WEIGHT').value);
      const heigth = Number(this.form.get('HEIGHT').value);
      this.form.controls['RESULT'].setValue(Math.round(weigth / Math.pow(heigth * 0.01, 2)));
      this.personSV
        .createBMI(JSON.stringify(this.form.value))
        .then(res => {
          this.router.navigate(['/', 'home']);
          this.alert.notify('เพิ่มข้อมูลสำเร็จ', 'success');
        })
        .catch(err => this.errorMsg = err);
    }
  }
}