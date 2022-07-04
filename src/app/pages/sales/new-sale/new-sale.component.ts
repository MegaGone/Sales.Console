import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IProduct, IClient, IPayMethod } from 'app/Interfaces';
import { Products, Clients, PayMethods } from '../data';

@Component({
  selector: 'new-sale',
  templateUrl: './new-sale.component.html',
  styleUrls: ['./new-sale.component.scss']
})
export class NewSaleComponent implements OnInit {

  // Dummy Data
  public Products  : IProduct[];
  public Clients   : IClient[]
  public PayMethods: IPayMethod[];

  public existArr : any[] = [
    {
      id: 0,
      value: 'Si'
    },
    {
      id: 1,
      value: 'No'
    }
  ]

  public salesForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.Products = Products;
    this.Clients = Clients;
    this.PayMethods = PayMethods;
  }

  ngOnInit(): void {
    this.initForm();
  }

  /**
   * INICIALIZAR EL FORMULARIO
   */
  initForm() {
    this.salesForm = this.fb.group({
      saleNo        : ['', Validators.required],
      date          : ['', Validators.required],
      payMethod     : [1, Validators.required],
      days          : [{ value: '', disabled: true }],
      print         : [false],
      clientNo      : ['', Validators.required],
      clientName    : ['', Validators.required],
      phone         : ['', Validators.required],
      address       : ['', Validators.required],
      cupo          : ['', Validators.required],
      price         : ['', Validators.required],
      itemCode      : [''],
      itemDesc      : [''],
      itemquantity  : [''],
      itemPrice     : [''],
      totalValue    : [''],
      discItem      : [''],
      valueDiscItem : [''],
      minPrice      : [''],
      exist         : [true],
      products      : this.fb.array([], Validators.required)
    })

    this.listenFormChanges();
  }

  addProduct() {
    const product: IProduct = {
      id      : '',
      code    : this.Form.itemCode.value,
      item    : this.Form.itemDesc.value,
      quantity: this.Form.itemquantity.value,
      price   : this.Form.itemPrice.value,
      subTotal: this.Form.totalValue.value,
      discount: this.Form.discItem.value
    }

    this.Products.push(product);

    this.Form.itemCode.setValue('');
    this.Form.itemDesc.setValue('');
    this.Form.itemquantity.setValue('');
    this.Form.itemPrice.setValue('');
    this.Form.totalValue.setValue('');
    this.Form.discItem.setValue('');
  }

  deleteProduct(i: number) {
    this.Products.splice(i, 1);
  }

  editProduct(product: IProduct) {
    this.Form.itemCode.setValue(product.code);
    this.Form.itemDesc.setValue(product.discount);
    this.Form.itemquantity.setValue(product.quantity);
    this.Form.itemPrice.setValue(product.price);
    this.Form.totalValue.setValue(product.subTotal);
    this.Form.discItem.setValue(product.discount);
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

  listenFormChanges() {
    this.Form.payMethod.valueChanges.subscribe(res => {

      if (res == 3) {
        this.Form.days.enable();
        this.Form.days.addValidators(Validators.required);
        this.Form.days.updateValueAndValidity();
        return;
      } else {
        this.Form.days.disable();
        this.Form.days.clearValidators();
        this.Form.days.updateValueAndValidity();
        return;
      }

    })
  }

  /********* FORM REFERENCES **********/
  get Form() {
    return this.salesForm.controls;
  }
}