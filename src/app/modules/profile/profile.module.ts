import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { EmergencyContactComponent } from './emergency-contact/emergency-contact.component';
import { EmpOrgStructureComponent } from './emp-org-structure/emp-org-structure.component';
import { BankInfoComponent } from './bank-info/bank-info.component';
import { SettingsComponent } from './settings/settings.component';
import { SignatureComponent } from './signature/signature.component';
import { ProfileUpdateRequestComponent } from './profile-update-request/profile-update-request.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { MyAssetsComponent } from './my-assets/my-assets.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { AddBankAccountComponent } from './bank-info/add-bank-account/add-bank-account.component';
import { MatDialogModule } from '@angular/material/dialog';
import { EditSignatureComponent } from './signature/edit-signature/edit-signature.component';
import { CreateSignatureComponent } from './signature/create-signature/create-signature.component';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EmergencyContactComponent,
    EmpOrgStructureComponent,
    BankInfoComponent,
    SettingsComponent,
    SignatureComponent,
    ProfileUpdateRequestComponent,
    FeedbackComponent,
    MyAssetsComponent,
    EditProfileComponent,
    AddBankAccountComponent,
    EditSignatureComponent,
    CreateSignatureComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    NgSelectModule,
    MatDialogModule,
    MatTabsModule,
  FormsModule]
})
export class ProfileModule {}
