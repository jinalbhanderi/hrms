import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AgreementListComponent } from './agreement-list/agreement-list.component';
import { EmployeeDirectoryComponent } from './employee-directory/employee-directory.component';
import { EmployeeExitsComponent } from './employee-exits/employee-exits.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeesProbationComponent } from './employees-probation/employees-probation.component';
import { OrganizationTreeComponent } from './organization-tree/organization-tree.component';
// import { CompensationListComponent } from './compensation-list/compensation-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { NgbAlertModule, NgbDatepickerModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { AddNewEmployeeComponent } from './add-new-employee/add-new-employee.component';
import { DefaultComponent } from './add-new-employee/default/default.component';
import { ActivityLogsOfAgreementComponent } from './agreement-list/activity-logs-of-agreement/activity-logs-of-agreement.component';
import { AddAgreementComponent } from './agreement-list/add-agreement/add-agreement.component';
import { AgreementsDetailsComponent } from './agreement-list/agreements-details/agreements-details.component';
import { EmployeeExitRequestsComponent } from './employee-exit-requests/employee-exit-requests.component';
import { AddEmployeeExitComponent } from './employee-exits/add-employee-exit/add-employee-exit.component';
import { EmployeeExitDetailsComponent } from './employee-exits/employee-exit-details/employee-exit-details.component';
import { FilterOfExitComponent } from './employee-exits/filter-of-exit/filter-of-exit.component';
import { RevokeReasonComponent } from './employee-exits/revoke-reason/revoke-reason.component';
import { FilterComponent } from './employee-list/filter/filter.component';
import { FilterOfProbaionComponent } from './employees-probation/filter-of-probaion/filter-of-probaion.component';
import { ProfileUpdateRequestsComponent } from './profile-update-requests/profile-update-requests.component';
import { SettlementListComponent } from './settlement-list/settlement-list.component';


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
    NgbDatepickerModule,
    NgbAlertModule,
    NgbModule,
    
  ],
})
export class EmployeeModule {}
