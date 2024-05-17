import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatusComponent } from './status/status.component';
import { NewJoineeComponent } from './new-joinee/new-joinee.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { PersonalDocumentComponent } from './personal-document/personal-document.component';
import { EmployeeExitComponent } from './employee-exit/employee-exit.component';
import { EmergencyContactComponent } from './emergency-contact/emergency-contact.component';
import { StatutoryComponent } from './statutory/statutory.component';
import { CovidReportComponent } from './covid-report/covid-report.component';
import { HealthBenefitReportComponent } from './health-benefit-report/health-benefit-report.component';

const routes: Routes = [
  {path:'status',component:StatusComponent},
  {path:'new-joinee',component:NewJoineeComponent},
  {path:'personal-info',component:PersonalInfoComponent},
  {path:'personal-document',component:PersonalDocumentComponent},
  {path:'employee-exit',component:EmployeeExitComponent},
  {path:'emergency-contact',component:EmergencyContactComponent},
  {path:'statutory',component: StatutoryComponent},
  {path:'covid-report',component: CovidReportComponent},
  {path:'health-benefit-report',component: HealthBenefitReportComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeReportRoutingModule { }
