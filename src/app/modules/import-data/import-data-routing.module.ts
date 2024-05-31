import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImportDataComponent } from './import-data.component';

const routes: Routes = [
  {
    path: '',
    component: ImportDataComponent,
    children: [
      { path: '', redirectTo: 'employee', pathMatch: 'full' },
      {
        path: 'employee',
        loadChildren: () =>
          import('./employee/employee.module').then((m) => m.EmployeeModule),
      },
      {
        path: 'leave',
        loadChildren: () =>
          import('./leave/leave.module').then((m) => m.LeaveModule),
      },
      {
        path: 'employee-field',
        loadChildren: () =>
          import('./employee-field/employee-field.module').then(
            (m) => m.EmployeeFieldModule
          ),
      },
      {
        path: 'org-structure',
        loadChildren: () =>
          import('./org-structure/org-structure.module').then(
            (m) => m.OrgStructureModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImportDataRoutingModule {}
