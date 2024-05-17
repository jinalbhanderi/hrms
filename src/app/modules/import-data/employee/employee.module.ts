import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { ImportSubCompanyComponent } from './import-sub-company/import-sub-company.component';
import { ImportEmployeeComponent } from './import-employee/import-employee.component';
import { ImportLocationComponent } from './import-location/import-location.component';
import { ImportEmployeeExitComponent } from './import-employee-exit/import-employee-exit.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ImportStatutoryComponent } from './import-statutory/import-statutory.component';
import { ImportPersonalDocumentComponent } from './import-personal-document/import-personal-document.component';


@NgModule({
  declarations: [
    ImportSubCompanyComponent,
    ImportEmployeeComponent,
    ImportLocationComponent,
    ImportEmployeeExitComponent,
    UpdateEmployeeComponent,
    ImportStatutoryComponent,
    ImportPersonalDocumentComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
