import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OvertimePolicyRoutingModule } from './overtime-policy-routing.module';
import { PayCodesComponent } from './pay-codes/pay-codes.component';
import { PolicyComponent } from './policy/policy.component';
import { CreateOvertimeComponent } from './policy/create-overtime/create-overtime.component';
import { CreatePayCodeComponent } from './pay-codes/create-pay-code/create-pay-code.component';


@NgModule({
  declarations: [
    PayCodesComponent,
    PolicyComponent,
    CreateOvertimeComponent,
    CreatePayCodeComponent
  ],
  imports: [
    CommonModule,
    OvertimePolicyRoutingModule
  ]
})
export class OvertimePolicyModule { }
