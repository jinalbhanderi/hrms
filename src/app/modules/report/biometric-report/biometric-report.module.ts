import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BiometricReportRoutingModule } from './biometric-report-routing.module';
import { InfoComponent } from './info/info.component';
import { PunchesComponent } from './punches/punches.component';
import { AssignComponent } from './assign/assign.component';
import { RecordsComponent } from './records/records.component';
import { DeviceComponent } from './device/device.component';
import { LocationComponent } from './location/location.component';


@NgModule({
  declarations: [
    InfoComponent,
    PunchesComponent,
    AssignComponent,
    RecordsComponent,
    DeviceComponent,
    LocationComponent
  ],
  imports: [
    CommonModule,
    BiometricReportRoutingModule
  ]
})
export class BiometricReportModule { }
