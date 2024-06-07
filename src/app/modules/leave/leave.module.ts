import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaveRoutingModule } from './leave-routing.module';
import { MyLeaveComponent } from './my-leave/my-leave.component';
import { HistoryComponent } from './history/history.component';
import { ApprovalComponent } from './approval/approval.component';
import { BalanceComponent } from './balance/balance.component';
import { AdjustedBalanceComponent } from './adjusted-balance/adjusted-balance.component';
import { MyCompOffComponent } from './my-comp-off/my-comp-off.component';
import { CompOffComponent } from './comp-off/comp-off.component';
import { AddLeaveComponent } from './add-leave/add-leave.component';
import { AdjustBalanceComponent } from './my-leave/adjust-balance/adjust-balance.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatDialogModule } from '@angular/material/dialog';
import { AddAdjustBalanceComponent } from './adjusted-balance/add-adjust-balance/add-adjust-balance.component';


@NgModule({
  declarations: [
    MyLeaveComponent,
    HistoryComponent,
    ApprovalComponent,
    BalanceComponent,
    AdjustedBalanceComponent,
    MyCompOffComponent,
    CompOffComponent,
    AddLeaveComponent,
    AdjustBalanceComponent,
    AddAdjustBalanceComponent
  ],
  imports: [
    CommonModule,
    LeaveRoutingModule,
    NgSelectModule,
    MatDialogModule
  ]
})
export class LeaveModule { }
