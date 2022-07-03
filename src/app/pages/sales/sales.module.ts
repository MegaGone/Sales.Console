import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { SalesComponent } from './sales.component';
import { NewSaleComponent } from './new-sale/new-sale.component';
import { NewReportComponent } from './new-report/new-report.component';


@NgModule({
  declarations: [
    SalesComponent,
    NewSaleComponent,
    NewReportComponent
  ],
  imports: [
    CommonModule,
    SalesRoutingModule
  ]
})
export class SalesModule { }
