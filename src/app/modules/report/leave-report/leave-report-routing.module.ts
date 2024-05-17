import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailyLeaveComponent } from './daily-leave/daily-leave.component';
import { LeaveBookedBalancedComponent } from './leave-booked-balanced/leave-booked-balanced.component';
import { LeaveTypeComponent } from './leave-type/leave-type.component';
import { LeaveEnhancementComponent } from './leave-enhancement/leave-enhancement.component';
import { CompOffReportComponent } from './comp-off-report/comp-off-report.component';

const routes: Routes = [
  {path:'daily-leave',component: DailyLeaveComponent},
  {path:'leave-booked-balanced',component: LeaveBookedBalancedComponent},
  {path:'leave-type',component:LeaveTypeComponent},
  {path:'leave-enhancement',component:LeaveEnhancementComponent},
  {path:'comp-off-report',component: CompOffReportComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaveReportRoutingModule { }
