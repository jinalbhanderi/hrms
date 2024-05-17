import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OvertimeRoutingModule } from './overtime-routing.module';
import { MyOvertimeComponent } from './my-overtime/my-overtime.component';
import { EmpOvertimeComponent } from './emp-overtime/emp-overtime.component';
import { EmployeeOvertimeReportComponent } from './employee-overtime-report/employee-overtime-report.component';
import { ConsecutiveExtraTimeComponent } from './consecutive-extra-time/consecutive-extra-time.component';


@NgModule({
  declarations: [
    MyOvertimeComponent,
    EmpOvertimeComponent,
    EmployeeOvertimeReportComponent,
    ConsecutiveExtraTimeComponent
  ],
  imports: [
    CommonModule,
    OvertimeRoutingModule
  ]
})
export class OvertimeModule { }
