import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OvertimePolicyRoutingModule } from './overtime-policy-routing.module';
import { PayCodesComponent } from './pay-codes/pay-codes.component';
import { PolicyComponent } from './policy/policy.component';


@NgModule({
  declarations: [
    PayCodesComponent,
    PolicyComponent
  ],
  imports: [
    CommonModule,
    OvertimePolicyRoutingModule
  ]
})
export class OvertimePolicyModule { }
