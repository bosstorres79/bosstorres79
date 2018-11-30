import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiProductComponent } from './bmi-product.component';

describe('BmiProductComponent', () => {
  let component: BmiProductComponent;
  let fixture: ComponentFixture<BmiProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmiProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmiProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
