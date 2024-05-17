import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailyAttendanceComponent } from './daily-attendance/daily-attendance.component';
import { EarlyClockOutComponent } from './early-clock-out/early-clock-out.component';
import { LateInComponent } from './late-in/late-in.component';
import { DailyAttendanceWithBreakComponent } from './daily-attendance-with-break/daily-attendance-with-break.component';
import { DailyAttendanceByDepartmentComponent } from './daily-attendance-by-department/daily-attendance-by-department.component';
import { RegularizationReportComponent } from './regularization-report/regularization-report.component';
import { AttendanceVerificationReportComponent } from './attendance-verification-report/attendance-verification-report.component';
import { AttendanceTypeReportComponent } from './attendance-type-report/attendance-type-report.component';
import { OvertimeReportComponent } from './overtime-report/overtime-report.component';
import { BreakHourReportComponent } from './break-hour-report/break-hour-report.component';

const routes: Routes = [
  {path:'daily-attendance',component:DailyAttendanceComponent},
  {path:'daily-attendance-location',component: DailyAttendanceComponent},
  {path:'early-clock-out',component:EarlyClockOutComponent},
  {path:'late-in',component:LateInComponent},
  {path:'daily-attendance-with-break',component:DailyAttendanceWithBreakComponent},
  {path:'daily-attendance-by-department',component: DailyAttendanceByDepartmentComponent},
  {path:'regularization-report',component: RegularizationReportComponent},
  {path:'attendance-verification-report',component:AttendanceVerificationReportComponent},
  {path:'attendance-type-report',component: AttendanceTypeReportComponent},
  {path:'overtime-report',component: OvertimeReportComponent},
  {path:'break-hour-report',component:BreakHourReportComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendanceReportRoutingModule { }
