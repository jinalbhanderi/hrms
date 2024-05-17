import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { SubCompanyComponent } from './sub-company/sub-company.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { LocationComponent } from './location/location.component';
import { EmailAlertComponent } from './email-alert/email-alert.component';
import { AccessLevelComponent } from './access-level/access-level.component';
import { ProductAccessComponent } from './product-access/product-access.component';
import { LeavePolicyComponent } from './leave-policy/leave-policy.component';
import { HolidaysPolicyComponent } from './holidays-policy/holidays-policy.component';
import { PolicyDocumentsComponent } from './policy-documents/policy-documents.component';
import { CompOffPolicyComponent } from './comp-off-policy/comp-off-policy.component';


@NgModule({
  declarations: [
    CompanyDetailsComponent,
    SubCompanyComponent,
    BankDetailsComponent,
    LocationComponent,
    EmailAlertComponent,
    AccessLevelComponent,
    ProductAccessComponent,
    LeavePolicyComponent,
    HolidaysPolicyComponent,
    PolicyDocumentsComponent,
    CompOffPolicyComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ],
  exports:[CompanyDetailsComponent]
})
export class SettingsModule { }
