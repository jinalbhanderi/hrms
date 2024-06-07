import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyOvertimeComponent } from './my-overtime/my-overtime.component';
import { EmpOvertimeComponent } from './emp-overtime/emp-overtime.component';
import { EmployeeOvertimeReportComponent } from './employee-overtime-report/employee-overtime-report.component';
import { ConsecutiveExtraTimeComponent } from './consecutive-extra-time/consecutive-extra-time.component';
import { AddComponent } from './my-overtime/add/add.component';

const routes: Routes = [
  // { path: 'add', component: AddComponent },
  { path: 'my-overtime', component: MyOvertimeComponent },
  {
    path: 'overtime',
    loadChildren: () =>
      import('../../../app/modules/overtime/emp-overtime/emp-overtime.module').then((m) => m.EmpOvertimeModule),
  },
  {
    path: 'employee-overtime-report',
    component: EmployeeOvertimeReportComponent,
  },
  { path: 'consecutive-extra-time', component: ConsecutiveExtraTimeComponent },
  // {path:'',component:},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OvertimeRoutingModule { }
