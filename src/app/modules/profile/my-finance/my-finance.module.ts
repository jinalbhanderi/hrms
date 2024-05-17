import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyFinanceRoutingModule } from './my-finance-routing.module';
import { TaxRegimeComponent } from './tax-regime/tax-regime.component';
import { SalaryTemplateComponent } from './salary-template/salary-template.component';


@NgModule({
  declarations: [
    TaxRegimeComponent,
    SalaryTemplateComponent
  ],
  imports: [
    CommonModule,
    MyFinanceRoutingModule
  ]
})
export class MyFinanceModule { }
