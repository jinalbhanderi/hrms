import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReimbursementSettingRoutingModule } from './reimbursement-setting-routing.module';
import { ReimbursementTypeComponent } from './reimbursement-type/reimbursement-type.component';
import { ApprovalChainComponent } from './approval-chain/approval-chain.component';
import { AddReimbursementComponent } from './reimbursement-type/add-reimbursement/add-reimbursement.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    ReimbursementTypeComponent,
    ApprovalChainComponent,
    AddReimbursementComponent
  ],
  imports: [
    CommonModule,
    ReimbursementSettingRoutingModule,
    MatDialogModule
  ]
})
export class ReimbursementSettingModule { }
