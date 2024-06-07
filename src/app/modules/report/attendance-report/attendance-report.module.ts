import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendanceReportRoutingModule } from './attendance-report-routing.module';
import { DailyAttendanceComponent } from './daily-attendance/daily-attendance.component';
import { DailyAttendanceLocationComponent } from './daily-attendance-location/daily-attendance-location.component';
import { EarlyClockOutComponent } from './early-clock-out/early-clock-out.component';
import { LateInComponent } from './late-in/late-in.component';
import { DailyAttendanceWithBreakComponent } from './daily-attendance-with-break/daily-attendance-with-break.component';
import { DailyAttendanceByDepartmentComponent } from './daily-attendance-by-department/daily-attendance-by-department.component';
import { RegularizationReportComponent } from './regularization-report/regularization-report.component';
import { AttendanceVerificationReportComponent } from './attendance-verification-report/attendance-verification-report.component';
import { AttendanceTypeReportComponent } from './attendance-type-report/attendance-type-report.component';
import { OvertimeReportComponent } from './overtime-report/overtime-report.component';
import { BreakHourReportComponent } from './break-hour-report/break-hour-report.component';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    DailyAttendanceComponent,
    DailyAttendanceLocationComponent,
    EarlyClockOutComponent,
    LateInComponent,
    DailyAttendanceWithBreakComponent,
    DailyAttendanceByDepartmentComponent,
    RegularizationReportComponent,
    AttendanceVerificationReportComponent,
    AttendanceTypeReportComponent,
    OvertimeReportComponent,
    BreakHourReportComponent
  ],
  imports: [
    CommonModule,
    AttendanceReportRoutingModule,
    NgSelectModule
  ]
})
export class AttendanceReportModule { }
