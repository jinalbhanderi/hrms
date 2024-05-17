import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeStatisticsRoutingModule } from './employee-statistics-routing.module';
import { PayrollComponent } from './payroll/payroll.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    PayrollComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    EmployeeStatisticsRoutingModule
  ]
})
export class EmployeeStatisticsModule { }
