import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReasonsComponent } from './reasons/reasons.component';
import { EmployeeExitTaskListComponent } from './employee-exit-task-list/employee-exit-task-list.component';
import { EmployeeExitSettingComponent } from './employee-exit-setting/employee-exit-setting.component';

const routes: Routes = [
  {path:'reasons',component:ReasonsComponent},
  {path:'employee-exit-task-list',component:EmployeeExitTaskListComponent},
  {path:'employee-exit-setting',component:EmployeeExitSettingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeExitRoutingModule { }
