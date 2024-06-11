import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeDirectoryComponent } from './employee-directory/employee-directory.component';
import { OrganizationTreeComponent } from './organization-tree/organization-tree.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeesProbationComponent } from './employees-probation/employees-probation.component';
import { EmployeeExitsComponent } from './employee-exits/employee-exits.component';
import { AgreementListComponent } from './agreement-list/agreement-list.component';
// import { CompensationListComponent } from './compensation-list/compensation-list.component';
import { ProfileUpdateRequestsComponent } from './profile-update-requests/profile-update-requests.component';
import { EmployeeExitRequestsComponent } from './employee-exit-requests/employee-exit-requests.component';
import { SettlementListComponent } from './settlement-list/settlement-list.component';
import { AddNewEmployeeComponent } from './add-new-employee/add-new-employee.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FilterComponent } from './employee-list/filter/filter.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FilterOfProbaionComponent } from './employees-probation/filter-of-probaion/filter-of-probaion.component';
import { EmployeeExitDetailsComponent } from './employee-exits/employee-exit-details/employee-exit-details.component';
import { AddEmployeeExitComponent } from './employee-exits/add-employee-exit/add-employee-exit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterOfExitComponent } from './employee-exits/filter-of-exit/filter-of-exit.component';
import { RevokeReasonComponent } from './employee-exits/revoke-reason/revoke-reason.component';
import { AddAgreementComponent } from './agreement-list/add-agreement/add-agreement.component';
import { AgreementsDetailsComponent } from './agreement-list/agreements-details/agreements-details.component';
import { ActivityLogsOfAgreementComponent } from './agreement-list/activity-logs-of-agreement/activity-logs-of-agreement.component';
import { DefaultComponent } from './add-new-employee/default/default.component';


@NgModule({
  declarations: [
    EmployeeDirectoryComponent,
    OrganizationTreeComponent,
    EmployeeListComponent,
    EmployeesProbationComponent,
    EmployeeExitsComponent,
    AgreementListComponent,
    // CompensationListComponent,
    ProfileUpdateRequestsComponent,
    EmployeeExitRequestsComponent,
    SettlementListComponent,
    AddNewEmployeeComponent,
    FilterComponent,
    FilterOfProbaionComponent,
    EmployeeExitDetailsComponent,
    AddEmployeeExitComponent,
    FilterOfExitComponent,
    RevokeReasonComponent,
    AddAgreementComponent,
    AgreementsDetailsComponent,
    ActivityLogsOfAgreementComponent,
    DefaultComponent,
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    NgSelectModule,
    MatDialogModule,
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule,
  ]
})
export class EmployeeModule { }
