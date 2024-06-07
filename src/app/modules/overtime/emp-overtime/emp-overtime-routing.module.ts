import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpOvertimeComponent } from './emp-overtime.component';
import { AddAllComponent } from './add-all/add-all.component';

const routes: Routes = [
  {
    path: '',
    component: EmpOvertimeComponent,
    children: [
      {
        path: 'add-all',component:AddAllComponent
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpOvertimeRoutingModule {}
