import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeExitRoutingModule } from './employee-exit-routing.module';
import { ReasonsComponent } from './reasons/reasons.component';
import { EmployeeExitTaskListComponent } from './employee-exit-task-list/employee-exit-task-list.component';
import { EmployeeExitSettingComponent } from './employee-exit-setting/employee-exit-setting.component';


@NgModule({
  declarations: [
    ReasonsComponent,
    EmployeeExitTaskListComponent,
    EmployeeExitSettingComponent
  ],
  imports: [
    CommonModule,
    EmployeeExitRoutingModule
  ]
})
export class EmployeeExitModule { }
