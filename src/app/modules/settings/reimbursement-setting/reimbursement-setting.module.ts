import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReimbursementSettingRoutingModule } from './reimbursement-setting-routing.module';
import { ReimbursementTypeComponent } from './reimbursement-type/reimbursement-type.component';
import { ApprovalChainComponent } from './approval-chain/approval-chain.component';


@NgModule({
  declarations: [
    ReimbursementTypeComponent,
    ApprovalChainComponent
  ],
  imports: [
    CommonModule,
    ReimbursementSettingRoutingModule
  ]
})
export class ReimbursementSettingModule { }
