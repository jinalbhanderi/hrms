import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendancePolicyRoutingModule } from './attendance-policy-routing.module';
import { ShiftComponent } from './shift/shift.component';
import { ShiftRequestComponent } from './shift-request/shift-request.component';
import { WeekendComponent } from './weekend/weekend.component';
import { BreakComponent } from './break/break.component';
import { PenalisationComponent } from './penalisation/penalisation.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { GeoFencingComponent } from './geo-fencing/geo-fencing.component';
import { WfhOdComponent } from './wfh-od/wfh-od.component';
import { ClockInMethodComponent } from './clock-in-method/clock-in-method.component';
import { AttendanceTypeComponent } from './attendance-type/attendance-type.component';
import { AttendanceSettingComponent } from './attendance-setting/attendance-setting.component';
import { BiometricsComponent } from './biometrics/biometrics.component';
import { ShiftManagementComponent } from './shift/shift-management/shift-management.component';
import { AssignEmployeeComponent } from './shift/assign-employee/assign-employee.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AddShiftRequestComponent } from './shift-request/add-shift-request/add-shift-request.component';
import { NewWeekendComponent } from './weekend/new-weekend/new-weekend.component';
import { AddBreakComponent } from './break/add-break/add-break.component';
import { CreatePenalisationComponent } from './penalisation/create-penalisation/create-penalisation.component';
import { CreateShiftSchedulerComponent } from './scheduler/create-shift-scheduler/create-shift-scheduler.component';
import { AddGeoFencingComponent } from './geo-fencing/add-geo-fencing/add-geo-fencing.component';
import { CreateOnDutyComponent } from './wfh-od/create-on-duty/create-on-duty.component';
import { CreateClockComponent } from './clock-in-method/create-clock/create-clock.component';
import { AddBiometricComponent } from './biometrics/add-biometric/add-biometric.component';


@NgModule({
  declarations: [
    ShiftComponent,
    ShiftRequestComponent,
    WeekendComponent,
    BreakComponent,
    PenalisationComponent,
    SchedulerComponent,
    GeoFencingComponent,
    WfhOdComponent,
    ClockInMethodComponent,
    AttendanceTypeComponent,
    AttendanceSettingComponent,
    BiometricsComponent,
    ShiftManagementComponent,
    AssignEmployeeComponent,
    AddShiftRequestComponent,
    NewWeekendComponent,
    AddBreakComponent,
    CreatePenalisationComponent,
    CreateShiftSchedulerComponent,
    AddGeoFencingComponent,
    CreateOnDutyComponent,
    CreateClockComponent,
    AddBiometricComponent
  ],
  imports: [
    CommonModule,
    AttendancePolicyRoutingModule,
    MatDialogModule
  ]
})
export class AttendancePolicyModule { }
