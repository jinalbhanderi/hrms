import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { EmergencyContactComponent } from './emergency-contact/emergency-contact.component';
import { EmpOrgStructureComponent } from './emp-org-structure/emp-org-structure.component';
import { BankInfoComponent } from './bank-info/bank-info.component';
import { SettingsComponent } from './settings/settings.component';
import { SignatureComponent } from './signature/signature.component';
import { ProfileUpdateRequestComponent } from './profile-update-request/profile-update-request.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { MyAssetsComponent } from './my-assets/my-assets.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,

    children: [
      { path: '', redirectTo: 'personal', pathMatch: 'full' },

      {
        path: 'personal',
        loadChildren: () =>
          import('./personal/personal.module').then((m) => m.PersonalModule),
      },
      {
        path: 'job',
        loadChildren: () => import('./job/job.module').then((m) => m.JobModule),
      },
      {
        path: 'documents',
        loadChildren: () =>
          import('./documents/documents.module').then((m) => m.DocumentsModule),
      },
      {
        path: 'my-finance',
        loadChildren: () =>
          import('./my-finance/my-finance.module').then(
            (m) => m.MyFinanceModule
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
      { path: 'feedback', component: FeedbackComponent },
      { path: 'assets', component: MyAssetsComponent },
      { path: '**', component: PagenotfoundComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
