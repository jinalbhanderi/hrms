import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaveReportRoutingModule } from './leave-report-routing.module';
import { DailyLeaveComponent } from './daily-leave/daily-leave.component';
import { LeaveBookedBalancedComponent } from './leave-booked-balanced/leave-booked-balanced.component';
import { LeaveTypeComponent } from './leave-type/leave-type.component';
import { LeaveEnhancementComponent } from './leave-enhancement/leave-enhancement.component';
import { CompOffReportComponent } from './comp-off-report/comp-off-report.component';


@NgModule({
  declarations: [
    DailyLeaveComponent,
    LeaveBookedBalancedComponent,
    LeaveTypeComponent,
    LeaveEnhancementComponent,
    CompOffReportComponent
  ],
  imports: [
    CommonModule,
    LeaveReportRoutingModule
  ]
})
export class LeaveReportModule { }
