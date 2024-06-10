import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeExitRoutingModule } from './employee-exit-routing.module';
import { ReasonsComponent } from './reasons/reasons.component';
import { EmployeeExitTaskListComponent } from './employee-exit-task-list/employee-exit-task-list.component';
import { EmployeeExitSettingComponent } from './employee-exit-setting/employee-exit-setting.component';
import { AddExitReasonComponent } from './reasons/add-exit-reason/add-exit-reason.component';
import { AddTaskComponent } from './employee-exit-task-list/add-task/add-task.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    ReasonsComponent,
    EmployeeExitTaskListComponent,
    EmployeeExitSettingComponent,
    AddExitReasonComponent,
    AddTaskComponent
  ],
  imports: [
    CommonModule,
    EmployeeExitRoutingModule,
    MatDialogModule
  ]
})
export class EmployeeExitModule { }
