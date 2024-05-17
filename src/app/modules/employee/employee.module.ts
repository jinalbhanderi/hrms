import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeDirectoryComponent } from './employee-directory/employee-directory.component';
import { OrganizationTreeComponent } from './organization-tree/organization-tree.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeesProbationComponent } from './employees-probation/employees-probation.component';
import { EmployeeExitsComponent } from './employee-exits/employee-exits.component';
import { AgreementListComponent } from './agreement-list/agreement-list.component';
import { CompensationListComponent } from './compensation-list/compensation-list.component';
import { ProfileUpdateRequestsComponent } from './profile-update-requests/profile-update-requests.component';
import { EmployeeExitRequestsComponent } from './employee-exit-requests/employee-exit-requests.component';
import { SettlementListComponent } from './settlement-list/settlement-list.component';


@NgModule({
  declarations: [
    EmployeeDirectoryComponent,
    OrganizationTreeComponent,
    EmployeeListComponent,
    EmployeesProbationComponent,
    EmployeeExitsComponent,
    AgreementListComponent,
    CompensationListComponent,
    ProfileUpdateRequestsComponent,
    EmployeeExitRequestsComponent,
    SettlementListComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
