import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  { path: 'directory', component: EmployeeDirectoryComponent },
  { path: 'organization-tree', component: OrganizationTreeComponent },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'employees-probation', component: EmployeesProbationComponent },
  { path: 'resignation', component: EmployeeExitsComponent },
  { path: 'agreement', component: AgreementListComponent },
  // {path:'compensation-list' ,component:CompensationListComponent},
  { path: 'profile-requests', component: ProfileUpdateRequestsComponent },
  { path: 'exit-requests', component: EmployeeExitRequestsComponent },
  { path: 'settlement-list', component: SettlementListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule {}
