import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeReportRoutingModule } from './employee-report-routing.module';
import { StatusComponent } from './status/status.component';
import { NewJoineeComponent } from './new-joinee/new-joinee.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { PersonalDocumentComponent } from './personal-document/personal-document.component';
import { EmployeeExitComponent } from './employee-exit/employee-exit.component';
import { EmergencyContactComponent } from './emergency-contact/emergency-contact.component';
import { StatutoryComponent } from './statutory/statutory.component';
import { CovidReportComponent } from './covid-report/covid-report.component';
import { HealthBenefitReportComponent } from './health-benefit-report/health-benefit-report.component';


@NgModule({
  declarations: [
    StatusComponent,
    NewJoineeComponent,
    PersonalInfoComponent,
    PersonalDocumentComponent,
    EmployeeExitComponent,
    EmergencyContactComponent,
    StatutoryComponent,
    CovidReportComponent,
    HealthBenefitReportComponent
  ],
  imports: [
    CommonModule,
    EmployeeReportRoutingModule
  ]
})
export class EmployeeReportModule { }
