import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { SalesComponent } from './sales.component';
import { NewSaleComponent } from './new-sale/new-sale.component';

// Modules
import { SalesRoutingModule } from './sales-routing.module';
import { ComponentsModule } from 'app/components/components.module';

@NgModule({
  declarations: [
    SalesComponent,
    NewSaleComponent
  ],
  imports: [
    CommonModule,
    SalesRoutingModule,
    ComponentsModule
  ]
})
export class SalesModule { }
