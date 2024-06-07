import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendanceRoutingModule } from './attendance-routing.module';
import { MyAttendanceComponent } from './my-attendance/my-attendance.component';
import { MyStatusReportComponent } from './my-status-report/my-status-report.component';
import { MyAttendanceRequestsComponent } from './my-attendance-requests/my-attendance-requests.component';
import { MyShiftChangeRequestsComponent } from './my-shift-change-requests/my-shift-change-requests.component';
import { MyOnDutyRequestComponent } from './my-on-duty-request/my-on-duty-request.component';
import { MyLateInComponent } from './my-late-in/my-late-in.component';
import { MyEarlyOutComponent } from './my-early-out/my-early-out.component';
import { EmpAttendanceComponent } from './emp-attendance/emp-attendance.component';
import { EmpStatusReportComponent } from './emp-status-report/emp-status-report.component';
import { EmployeeMonthlyAttendanceComponent } from './employee-monthly-attendance/employee-monthly-attendance.component';
import { AttendanceRequestsComponent } from './attendance-requests/attendance-requests.component';
import { ShiftChangeRequestsComponent } from './shift-change-requests/shift-change-requests.component';
import { EmpOnDutyRequestComponent } from './emp-on-duty-request/emp-on-duty-request.component';
import { AttendanceVerificationComponent } from './attendance-verification/attendance-verification.component';
import { EmpEarlyOutComponent } from './emp-early-out/emp-early-out.component';
import { EmpLateInComponent } from './emp-late-in/emp-late-in.component';
import { AbsentPresentComponent } from './absent-present/absent-present.component';
import { PresentDefaultsComponent } from './present-defaults/present-defaults.component';
import { NonWorkingDayComponent } from './non-working-day/non-working-day.component';
import { WorkingDayComponent } from './working-day/working-day.component';
import { ShiftCalendarComponent } from './shift-calendar/shift-calendar.component';
import { TimesheetComponent } from './my-attendance/timesheet/timesheet.component';


@NgModule({
  declarations: [
    MyAttendanceComponent,
    MyStatusReportComponent,
    MyAttendanceRequestsComponent,
    MyShiftChangeRequestsComponent,
    MyOnDutyRequestComponent,
    MyLateInComponent,
    MyEarlyOutComponent,
    EmpAttendanceComponent,
    EmpStatusReportComponent,
    EmployeeMonthlyAttendanceComponent,
    AttendanceRequestsComponent,
    ShiftChangeRequestsComponent,
    EmpOnDutyRequestComponent,
    AttendanceVerificationComponent,
    EmpEarlyOutComponent,
    EmpLateInComponent,
    AbsentPresentComponent,
    PresentDefaultsComponent,
    NonWorkingDayComponent,
    WorkingDayComponent,
    ShiftCalendarComponent,
    TimesheetComponent
  ],
  imports: [
    CommonModule,
    AttendanceRoutingModule,
    
  ]
})
export class AttendanceModule { }
