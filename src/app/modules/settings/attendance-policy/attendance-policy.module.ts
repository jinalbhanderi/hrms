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
    BiometricsComponent
  ],
  imports: [
    CommonModule,
    AttendancePolicyRoutingModule
  ]
})
export class AttendancePolicyModule { }
