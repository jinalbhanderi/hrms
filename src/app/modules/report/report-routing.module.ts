import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportComponent } from './report.component';
import { AttendanceSummaryReportComponent } from './attendance-summary-report/attendance-summary-report.component';
import { OrganizationalReportComponent } from './organizational-report/organizational-report.component';
import { DownloadRequestReportComponent } from './download-request-report/download-request-report.component';
import { UploadReportComponent } from './upload-report/upload-report.component';
import { CompanyHoursReportComponent } from './company-hours-report/company-hours-report.component';
import { CompensationReportComponent } from './compensation-report/compensation-report.component';

const routes: Routes = [
  {
    path: '',
    component: ReportComponent,
    children: [
      {
        path: 'attendance-report',
        loadChildren: () =>
          import('./attendance-report/attendance-report.module').then((m) => m.AttendanceReportModule),
      },
      {
        path: 'leave-report',
        loadChildren: () =>
          import('./leave-report/leave-report.module').then((m) => m.LeaveReportModule),
      },
      {
        path: 'custom-report',
        loadChildren: () =>
          import('./custom-report/custom-report.module').then((m) => m.CustomReportModule),
      },
      {
        path: 'employee-report',
        loadChildren: () =>
          import('./employee-report/employee-report.module').then((m) => m.EmployeeReportModule),
      },
      {
        path: 'employee-statistics',
        loadChildren: () =>
          import('./employee-statistics/employee-statistics.module').then((m) => m.EmployeeStatisticsModule),
      },
      {
        path: 'biometric-report',
        loadChildren: () =>
          import('./biometric-report/biometric-report.module').then((m) => m.BiometricReportModule),
      },
      {path:'attendance-summary-report' ,component:AttendanceSummaryReportComponent},
      {path:'organizational-report' ,component:OrganizationalReportComponent},
      {path:'compensation-report' ,component:CompensationReportComponent},
      {path:'download-request-report' ,component:DownloadRequestReportComponent},
      {path:'upload-report' ,component:UploadReportComponent},
      {path:'company-hours-report' ,component:CompanyHoursReportComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportRoutingModule {}
