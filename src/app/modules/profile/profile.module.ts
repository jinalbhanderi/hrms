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
  ],
  imports: [CommonModule, ProfileRoutingModule],
})
export class ProfileModule {}
