import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { NonWorkingDayComponent } from './non-working-day/non-working-day.component';
import { WorkingDayComponent } from './working-day/working-day.component';
import { ShiftCalendarComponent } from './shift-calendar/shift-calendar.component';
import { PresentDefaultsComponent } from './present-defaults/present-defaults.component';

const routes: Routes = [
  {path:'my-attendance', component:MyAttendanceComponent},
  {path:'my-status-report', component:MyStatusReportComponent},
  {path:'my-attendance-requests', component: MyAttendanceRequestsComponent },
  {path:'my-shift-change-requests', component:MyShiftChangeRequestsComponent },
  {path:'my-On-duty-Request', component:MyOnDutyRequestComponent },
  {path:'my-late-in', component:MyLateInComponent },
  {path:'my-early-out', component:MyEarlyOutComponent },
  {path:'attendance', component:EmpAttendanceComponent },
  {path:'status-report', component: EmpStatusReportComponent},
  {path:'employee-monthly-attendance', component:EmployeeMonthlyAttendanceComponent },
  {path:'attendance-requests', component:AttendanceRequestsComponent },
  {path:'shift-change-requests', component:ShiftChangeRequestsComponent },
  {path:'on-duty-request', component:EmpOnDutyRequestComponent },
  {path:'attendance-verification', component: AttendanceVerificationComponent },
  {path:'early-out', component: EmpEarlyOutComponent},
  {path:'late-in', component:EmpLateInComponent },
  {path:'absent-present', component:AbsentPresentComponent },
  {path:'present-defaults', component:PresentDefaultsComponent },
  {path:'non-working-day', component:NonWorkingDayComponent },
  {path:'working-day', component:WorkingDayComponent },
  {path:'shift-calendar', component:ShiftCalendarComponent },
  // {path:'settings/shift', component: },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendanceRoutingModule { }
