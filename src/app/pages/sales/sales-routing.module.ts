import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { SalesComponent } from './sales.component';
import { NewSaleComponent } from './new-sale/new-sale.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '',             component: SalesComponent   },
      { path: 'crear-venta',  component: NewSaleComponent },
      { path: '**',           redirectTo: ''              }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
