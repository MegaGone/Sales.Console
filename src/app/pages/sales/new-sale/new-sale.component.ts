import { Component, OnInit } from '@angular/core';
import { IProduct } from 'app/Interfaces';
import { Products } from '../data';

@Component({
  selector: 'new-sale',
  templateUrl: './new-sale.component.html',
  styleUrls: ['./new-sale.component.scss']
})
export class NewSaleComponent implements OnInit {

  public Products: IProduct[];

  constructor() { 
    this.Products = Products;
  }

  ngOnInit(): void {
  }

}
