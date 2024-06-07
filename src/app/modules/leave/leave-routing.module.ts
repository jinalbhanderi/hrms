import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyLeaveComponent } from './my-leave/my-leave.component';
import { HistoryComponent } from './history/history.component';
import { ApprovalComponent } from './approval/approval.component';
import { BalanceComponent } from './balance/balance.component';
import { AdjustedBalanceComponent } from './adjusted-balance/adjusted-balance.component';
import { CompOffComponent } from './comp-off/comp-off.component';
import { AddLeaveComponent } from './add-leave/add-leave.component';

const routes: Routes = [
  { path: 'my-leave', component: MyLeaveComponent },

  {
    path: 'my-comp-off',
    loadChildren: () =>
      import('../../modules/leave/my-comp-off/my-comp-off.module').then((m) => m.MyCompOffModule),
  },

  { path: 'history', component: HistoryComponent },
  { path: 'approval', component: ApprovalComponent },
  { path: 'balance', component: BalanceComponent },
  { path: 'adjusted-balance', component: AdjustedBalanceComponent },
  { path: 'comp-off', component: CompOffComponent },
  { path: 'add', component: AddLeaveComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaveRoutingModule { }
