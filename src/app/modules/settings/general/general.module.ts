import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralRoutingModule } from './general-routing.module';
import { BasicComponent } from './basic/basic.component';
import { IpRestrictionsComponent } from './ip-restrictions/ip-restrictions.component';
import { LoggedInIpComponent } from './logged-in-ip/logged-in-ip.component';
import { ProfileUpdateSettingsComponent } from './profile-update-settings/profile-update-settings.component';
import { InsuranceTypeComponent } from './insurance-type/insurance-type.component';


@NgModule({
  declarations: [
    BasicComponent,
    IpRestrictionsComponent,
    LoggedInIpComponent,
    ProfileUpdateSettingsComponent,
    InsuranceTypeComponent
  ],
  imports: [
    CommonModule,
    GeneralRoutingModule
  ]
})
export class GeneralModule { }
