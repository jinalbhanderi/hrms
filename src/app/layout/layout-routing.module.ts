import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../modules/dashboard/dashboard.component';
import { DocumentComponent } from '../modules/document/document.component';
import { InboxComponent } from '../modules/inbox/inbox.component';
import { PerformanceReportComponent } from '../modules/performance-report/performance-report.component';
import { SocialComponent } from '../modules/social/social.component';
import { LayoutComponent } from './layout.component';
import { PagenotfoundComponent } from '../modules/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'inbox', component: InboxComponent },
      { path: 'announcement', component: SocialComponent },
      { path: 'document', component: DocumentComponent },
      { path: 'performance-report', component: PerformanceReportComponent },
      {
        path: '',
        loadChildren: () =>
          import('../modules/employee/employee.module').then(
            (m) => m.EmployeeModule
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import('../modules/attendance/attendance.module').then(
            (m) => m.AttendanceModule
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import('../modules/overtime/overtime.module').then(
            (m) => m.OvertimeModule
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import('../modules/holidays/holidays.module').then(
            (m) => m.HolidaysModule
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import('../modules/leave/leave.module').then((m) => m.LeaveModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('../modules/help-desk/help-desk.module').then(
            (m) => m.HelpDeskModule
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import('../modules/onboarding/onboarding.module').then(
            (m) => m.OnboardingModule
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import('../modules/reimbursement/reimbursement.module').then(
            (m) => m.ReimbursementModule
          ),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('../modules/settings/settings.module').then(
            (m) => m.SettingsModule
          ),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('../modules/profile/profile.module').then(
            (m) => m.ProfileModule
          ),
      },
      {
        path: 'reports',
        loadChildren: () =>
          import('../modules/report/report.module').then((m) => m.ReportModule),
      },
      {
        path: 'import-data',
        loadChildren: () =>
          import('../modules/import-data/import-data.module').then(
            (m) => m.ImportDataModule
          ),
      },

      { path: 'error/404', component: PagenotfoundComponent },
      { path: '**', redirectTo: '/error/404', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
