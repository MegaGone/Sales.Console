import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IProduct } from 'app/Interfaces';
import { Products } from '../data';

@Component({
  selector: 'new-sale',
  templateUrl: './new-sale.component.html',
  styleUrls: ['./new-sale.component.scss']
})
export class NewSaleComponent implements OnInit {

  public Products: IProduct[];
  public salesForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.Products = Products;
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.salesForm = this.fb.group({
      saleNo    : ['', Validators.required],
      date      : ['', Validators.required],
      payMethod : ['', Validators.required],
      days      : ['', Validators.required],
      print     : [false],
      clientNo  : ['', Validators.required],
      clientName: ['', Validators.required],
      phone     : ['', Validators.required],
      address   : ['', Validators.required],
      cupo      : ['', Validators.required],
      price     : ['', Validators.required],
      products  : this.fb.array([])
    })
  }

  saveRecipe() {

    if (this.salesForm.invalid) {
      return Object.values(this.salesForm.controls).forEach(c => c.markAsTouched());
    }

    console.log(this.salesForm.value);
     
  }
}