import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { EmailAlertComponent } from './email-alert/email-alert.component';
import { ProductAccessComponent } from './product-access/product-access.component';
import { AccessLevelComponent } from './access-level/access-level.component';
import { LeavePolicyComponent } from './leave-policy/leave-policy.component';
import { HolidaysPolicyComponent } from './holidays-policy/holidays-policy.component';
import { PolicyDocumentsComponent } from './policy-documents/policy-documents.component';
import { CompOffPolicyComponent } from './comp-off-policy/comp-off-policy.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    children: [
      { path: '', redirectTo: 'company-details', pathMatch: 'full' },

      {
        path: 'general',
        loadChildren: () =>
          import('./general/general.module').then((m) => m.GeneralModule),
      },
      {
        path: 'employee-fields',
        loadChildren: () =>
          import('./employee-fields/employee-fields.module').then(
            (m) => m.EmployeeFieldsModule
          ),
      },
      {
        path: 'shift',
        loadChildren: () =>
          import('./attendance-policy/attendance-policy.module').then(
            (m) => m.AttendancePolicyModule
          ),
      },
      {
        path: 'ot-policy',
        loadChildren: () =>
          import('./overtime-policy/overtime-policy.module').then(
            (m) => m.OvertimePolicyModule
          ),
      },
      {
        path: 'onboarding-setting',
        loadChildren: () =>
          import('./onboarding-setting/onboarding-setting.module').then(
            (m) => m.OnboardingSettingModule
          ),
      },
      {
        path: 'employee-exit',
        loadChildren: () =>
          import('./employee-exit/employee-exit.module').then(
            (m) => m.EmployeeExitModule
          ),
      },
      {
        path: 'feedback',
        loadChildren: () =>
          import('./feedback/feedback.module').then((m) => m.FeedbackModule),
      },
      {
        path: 'help-desk',
        loadChildren: () =>
          import('./help-desk/help-desk.module').then((m) => m.HelpDeskModule),
      },
      {
        path: 'reimbursement-setting',
        loadChildren: () =>
          import('./reimbursement-setting/reimbursement-setting.module').then(
            (m) => m.ReimbursementSettingModule
          ),
      },
      {
        path: 'org-structure',
        loadChildren: () =>
          import('./org-structure/org-structure.module').then(
            (m) => m.OrgStructureModule
          ),
      },
      {
        path: 'sub-company',
        loadChildren: () =>
          import('./sub-company/sub-company.module').then(
            (m) => m.SubCompanyModule
          ),
      },
      {
        path: 'location-type',
        loadChildren: () =>
          import('./location/location.module').then((m) => m.LocationModule),
      },
      // { path: 'sub-company', component: SubCompanyComponent },
      { path: 'company-details', component: CompanyDetailsComponent },
      { path: 'bank-details', component: BankDetailsComponent },
      // { path: 'location', component: LocationComponent },
      { path: 'email-alert', component: EmailAlertComponent },
      { path: 'leave-policy', component: LeavePolicyComponent },
      { path: 'holidays-policy', component: HolidaysPolicyComponent },
      { path: 'comp-off-policy', component: CompOffPolicyComponent },
      { path: 'policy-documents', component: PolicyDocumentsComponent },
      { path: 'access-level', component: AccessLevelComponent },
      { path: 'product-access', component: ProductAccessComponent },
      { path: '**', component: PagenotfoundComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
