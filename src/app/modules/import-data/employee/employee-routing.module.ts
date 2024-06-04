import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImportSubCompanyComponent } from './import-sub-company/import-sub-company.component';
import { ImportEmployeeComponent } from './import-employee/import-employee.component';
import { ImportLocationComponent } from './import-location/import-location.component';
import { ImportEmployeeExitComponent } from './import-employee-exit/import-employee-exit.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ImportStatutoryComponent } from './import-statutory/import-statutory.component';
import { ImportPersonalDocumentComponent } from './import-personal-document/import-personal-document.component';

const routes: Routes = [
  { path: '', redirectTo: 'import-employee', pathMatch: 'full' },
  { path: 'import-sub-company', component: ImportSubCompanyComponent },
  { path: 'import-employee', component: ImportEmployeeComponent },
  { path: 'import-location', component: ImportLocationComponent },
  { path: 'import-employee-exit', component: ImportEmployeeExitComponent },
  { path: 'update-employee', component: UpdateEmployeeComponent },
  { path: 'import-statutory', component: ImportStatutoryComponent },
  {
    path: 'import-personal-document',
    component: ImportPersonalDocumentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule {}
