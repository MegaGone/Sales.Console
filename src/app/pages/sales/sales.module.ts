import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { SalesComponent } from './sales.component';
import { NewSaleComponent } from './new-sale/new-sale.component';

// Modules
import { SalesRoutingModule } from './sales-routing.module';
import { ComponentsModule } from 'app/components/components.module';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    SalesComponent,
    NewSaleComponent
  ],
  imports: [
    CommonModule,
    SalesRoutingModule,
    ComponentsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ]
})
export class SalesModule { }
