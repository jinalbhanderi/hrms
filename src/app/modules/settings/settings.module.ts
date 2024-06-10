import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { SubCompanyComponent } from './sub-company/sub-company.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { EmailAlertComponent } from './email-alert/email-alert.component';
import { AccessLevelComponent } from './access-level/access-level.component';
import { ProductAccessComponent } from './product-access/product-access.component';
import { LeavePolicyComponent } from './leave-policy/leave-policy.component';
import { HolidaysPolicyComponent } from './holidays-policy/holidays-policy.component';
import { PolicyDocumentsComponent } from './policy-documents/policy-documents.component';
import { CompOffPolicyComponent } from './comp-off-policy/comp-off-policy.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatDialogModule } from '@angular/material/dialog';
import { SubCompanyModule } from "./sub-company/sub-company.module";
import { AddHolidayComponent } from './holidays-policy/add-holiday/add-holiday.component';
import { CrateCompOffPolicyComponent } from './comp-off-policy/crate-comp-off-policy/crate-comp-off-policy.component';
import { AddPolicyDocumentComponent } from './policy-documents/add-policy-document/add-policy-document.component';
import { NewAccessLevelComponent } from './access-level/new-access-level/new-access-level.component';


@NgModule({
    declarations: [
        CompanyDetailsComponent,
        SubCompanyComponent,
        BankDetailsComponent,
        EmailAlertComponent,
        AccessLevelComponent,
        ProductAccessComponent,
        LeavePolicyComponent,
        HolidaysPolicyComponent,
        PolicyDocumentsComponent,
        CompOffPolicyComponent,
        AddHolidayComponent,
        CrateCompOffPolicyComponent,
        AddPolicyDocumentComponent,
        NewAccessLevelComponent,
    ],
    exports: [CompanyDetailsComponent],
    imports: [CommonModule, SettingsRoutingModule, NgSelectModule, MatDialogModule, SubCompanyModule]
})
export class SettingsModule {}
