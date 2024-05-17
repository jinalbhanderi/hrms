import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { IpRestrictionsComponent } from './ip-restrictions/ip-restrictions.component';
import { LoggedInIpComponent } from './logged-in-ip/logged-in-ip.component';
import { ProfileUpdateSettingsComponent } from './profile-update-settings/profile-update-settings.component';
import { InsuranceTypeComponent } from './insurance-type/insurance-type.component';

const routes: Routes = [
  {path:'basic' ,component:BasicComponent},
  {path:'ip-restrictions' ,component:IpRestrictionsComponent},
  {path:'logged-in-ip' ,component:LoggedInIpComponent},
  {path:'profile-update-settings' ,component:ProfileUpdateSettingsComponent},
  {path:'insurance-type' ,component:InsuranceTypeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralRoutingModule { }
