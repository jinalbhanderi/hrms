import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgreementListComponent } from './agreement-list/agreement-list.component';
import { EmployeeDirectoryComponent } from './employee-directory/employee-directory.component';
import { EmployeeExitsComponent } from './employee-exits/employee-exits.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeesProbationComponent } from './employees-probation/employees-probation.component';
import { OrganizationTreeComponent } from './organization-tree/organization-tree.component';
// import { CompensationListComponent } from './compensation-list/compensation-list.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { BankInfoComponent } from '../profile/bank-info/bank-info.component';
import { EmergencyContactComponent } from '../profile/emergency-contact/emergency-contact.component';
import { EmpOrgStructureComponent } from '../profile/emp-org-structure/emp-org-structure.component';
import { MyAssetsComponent } from '../profile/my-assets/my-assets.component';
import { ProfileUpdateRequestComponent } from '../profile/profile-update-request/profile-update-request.component';
import { ProfileComponent } from '../profile/profile.component';
import { SettingsComponent } from '../profile/settings/settings.component';
import { SignatureComponent } from '../profile/signature/signature.component';
import { AddNewEmployeeComponent } from './add-new-employee/add-new-employee.component';
import { EmployeeExitRequestsComponent } from './employee-exit-requests/employee-exit-requests.component';
import { ProfileUpdateRequestsComponent } from './profile-update-requests/profile-update-requests.component';
import { SettlementListComponent } from './settlement-list/settlement-list.component';

const routes: Routes = [
  { path: 'directory', component: EmployeeDirectoryComponent },
  { path: 'organization-tree', component: OrganizationTreeComponent },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'add-new-employee', component: AddNewEmployeeComponent },

  {
    path: 'employees',
    component: ProfileComponent,

    children: [
      {
        path: 'personal/:id',
        loadChildren: () =>
          import('../profile/personal/personal.module').then(
            (m) => m.PersonalModule
          ),
      },
      {
        path: 'job',
        loadChildren: () =>
          import('../profile/job/job.module').then((m) => m.JobModule),
      },
      {
        path: 'documents',
        loadChildren: () =>
          import('../profile/documents/documents.module').then(
            (m) => m.DocumentsModule
          ),
      },
      {
        path: 'my-finance',
        loadChildren: () =>
          import('../profile/my-finance/my-finance.module').then(
            (m) => m.MyFinanceModule
          ),
      },
      {
        path: 'feedback',
        loadChildren: () =>
          import('../profile/feedback/feedback.module').then(
            (m) => m.FeedbackModule
          ),
      },
      { path: 'emergency-contact', component: EmergencyContactComponent },
      { path: 'emp-org-structure', component: EmpOrgStructureComponent },
      { path: 'bank-info', component: BankInfoComponent },
      { path: 'policy', component: SettingsComponent },
      { path: 'signature', component: SignatureComponent },
      {
        path: 'profile-update-request',
        component: ProfileUpdateRequestComponent,
      },
      // { path: 'feedback', component: FeedbackComponent },
      { path: 'assets', component: MyAssetsComponent },
      { path: '**', component: PagenotfoundComponent },
    ],
  },

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
