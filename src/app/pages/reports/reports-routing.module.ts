import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component
import { ReportsComponent } from './reports.component';
import { NewReportComponent } from './new-report/new-report.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '',                 component: ReportsComponent   },
      { path: 'crear-reporte',    component: NewReportComponent },
      { path: '**',               redirectTo: ''                }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
