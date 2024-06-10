import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralRoutingModule } from './general-routing.module';
import { BasicComponent } from './basic/basic.component';
import { IpRestrictionsComponent } from './ip-restrictions/ip-restrictions.component';
import { LoggedInIpComponent } from './logged-in-ip/logged-in-ip.component';
import { ProfileUpdateSettingsComponent } from './profile-update-settings/profile-update-settings.component';
import { InsuranceTypeComponent } from './insurance-type/insurance-type.component';
import { ActivityLogBasicComponent } from './basic/activity-log-basic/activity-log-basic.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BasicActivityViewDetailsComponent } from './basic/basic-activity-view-details/basic-activity-view-details.component';
import { AddInsurancetypeComponent } from './insurance-type/add-insurancetype/add-insurancetype.component';


@NgModule({
  declarations: [
    BasicComponent,
    IpRestrictionsComponent,
    LoggedInIpComponent,
    ProfileUpdateSettingsComponent,
    InsuranceTypeComponent,
    ActivityLogBasicComponent,
    BasicActivityViewDetailsComponent,
    AddInsurancetypeComponent
  ],
  imports: [
    CommonModule,
    GeneralRoutingModule,
    MatDialogModule
  ]
})
export class GeneralModule { }
