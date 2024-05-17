import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  { path: 'shift', component: ShiftComponent },
  { path: 'shift-request', component: ShiftRequestComponent },
  { path: 'weekend', component: WeekendComponent },
  { path: 'break', component: BreakComponent },
  { path: 'penalisation', component: PenalisationComponent },
  { path: 'scheduler', component: SchedulerComponent },
  { path: 'geo-fencing', component: GeoFencingComponent },
  { path: 'wfh-od', component: WfhOdComponent },
  { path: 'clock-in-method', component: ClockInMethodComponent },
  { path: 'attendance-type', component: AttendanceTypeComponent },
  { path: 'attendance-setting', component: AttendanceSettingComponent },
  { path: 'biometrics', component: BiometricsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttendancePolicyRoutingModule {}
