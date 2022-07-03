import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IProduct, IClient } from 'app/Interfaces';
import { Products, Clients } from '../data';

@Component({
  selector: 'new-sale',
  templateUrl: './new-sale.component.html',
  styleUrls: ['./new-sale.component.scss']
})
export class NewSaleComponent implements OnInit {

  // Dummy Data
  public Products: IProduct[];
  public Clients: IClient[]

  public salesForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.Products = Products;
    this.Clients = Clients;
  }

  ngOnInit(): void {
    this.initForm();
  }

  /**
   * INICIALIZAR EL FORMULARIO
   */
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

  /**
   * 
   * @returns GUARDAR FACTURA
   */
  saveRecipe() {

    if (this.salesForm.invalid) {
      return Object.values(this.salesForm.controls).forEach(c => c.markAsTouched());
    }

    console.log(this.salesForm.value);  
  }

  /**
   * 
   * @param id - ID of client to search in DB
   */
  async searchClient(id: number) {

    if (!id || id < 0) return this.Form.clientNo.markAsTouched();

    const client = await this.Clients.find(client => client.clientNo == id);
    await this.setClientData(client);
  }

  /**
   * 
   * @param client - Client to set data in form
   */
  setClientData(client: IClient) {

    if (!client) {
      this.Form.clientName.setValue('');
      this.Form.phone.setValue('');
      this.Form.address.setValue('');
      this.Form.cupo.setValue('');
      this.Form.price.setValue('');
      this.salesForm.updateValueAndValidity();
      return;
    }

    this.Form.clientName.setValue(client.clientName);
    this.Form.phone.setValue(client.phone);
    this.Form.address.setValue(client.address);
    this.Form.cupo.setValue(client.quota);
    this.Form.price.setValue(client.priceSale);

    this.salesForm.updateValueAndValidity();
  }

  /********* FORM REFERENCES **********/
  get Form() {
    return this.salesForm.controls;
  }
}