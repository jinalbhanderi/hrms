import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { AttendanceSummaryReportComponent } from './attendance-summary-report/attendance-summary-report.component';
import { OrganizationalReportComponent } from './organizational-report/organizational-report.component';
import { CompensationReportComponent } from './compensation-report/compensation-report.component';
import { DownloadRequestReportComponent } from './download-request-report/download-request-report.component';
import { UploadReportComponent } from './upload-report/upload-report.component';
import { CompanyHoursReportComponent } from './company-hours-report/company-hours-report.component';


@NgModule({
  declarations: [
    AttendanceSummaryReportComponent,
    OrganizationalReportComponent,
    CompensationReportComponent,
    DownloadRequestReportComponent,
    UploadReportComponent,
    CompanyHoursReportComponent
  ],
  imports: [
    CommonModule,
    ReportRoutingModule
  ]
})
export class ReportModule { }
