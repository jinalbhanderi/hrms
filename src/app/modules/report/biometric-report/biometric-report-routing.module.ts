import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { PunchesComponent } from './punches/punches.component';
import { AssignComponent } from './assign/assign.component';
import { RecordsComponent } from './records/records.component';
import { DeviceComponent } from './device/device.component';
import { LocationComponent } from './location/location.component';

const routes: Routes = [
  {path:'info',component:InfoComponent},
  {path:'punches',component:PunchesComponent},
  {path:'assign',component:AssignComponent},
  {path:'records',component:RecordsComponent},
  {path:'device',component:DeviceComponent},
  {path:'location',component:LocationComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BiometricReportRoutingModule { }
