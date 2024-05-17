import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReimbursementListComponent } from './reimbursement-list/reimbursement-list.component';
import { ReimbursementRequestComponent } from './reimbursement-request/reimbursement-request.component';

const routes: Routes = [
  {path:'reimbursement-list', component:ReimbursementListComponent},
  {path:'reimbursement-request', component:ReimbursementRequestComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReimbursementRoutingModule { }
