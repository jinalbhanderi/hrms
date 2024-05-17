import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReimbursementTypeComponent } from './reimbursement-type/reimbursement-type.component';
import { ApprovalChainComponent } from './approval-chain/approval-chain.component';

const routes: Routes = [
  {path:'reimbursement-type',component:ReimbursementTypeComponent},
  {path:'approval-chain',component: ApprovalChainComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReimbursementSettingRoutingModule { }
