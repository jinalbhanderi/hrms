import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyLeaveComponent } from './my-leave/my-leave.component';
import { MyCompOffComponent } from './my-comp-off/my-comp-off.component';
import { HistoryComponent } from './history/history.component';
import { ApprovalComponent } from './approval/approval.component';
import { BalanceComponent } from './balance/balance.component';
import { AdjustedBalanceComponent } from './adjusted-balance/adjusted-balance.component';
import { CompOffComponent } from './comp-off/comp-off.component';

const routes: Routes = [
  {path:'my-leave',component:MyLeaveComponent},
  {path:'my-comp-off',component:MyCompOffComponent},
  {path:'history',component:HistoryComponent},
  {path:'approval',component:ApprovalComponent},
  {path:'balance',component:BalanceComponent},
  {path:'adjusted-balance',component:AdjustedBalanceComponent},
  {path:'comp-off',component:CompOffComponent},
  // {path:'comp-offv',component:CompOffComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaveRoutingModule { }
