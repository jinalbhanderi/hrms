import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { LayoutModule } from './layout/layout.module';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { AttendanceModule } from './modules/attendance/attendance.module';
import { AuthModule } from './modules/auth/auth.module';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { DocumentComponent } from './modules/document/document.component';
import { EmployeeModule } from './modules/employee/employee.module';
import { HelpDeskModule } from './modules/help-desk/help-desk.module';
import { HolidaysModule } from './modules/holidays/holidays.module';
import { ImportDataComponent } from './modules/import-data/import-data.component';
import { InboxComponent } from './modules/inbox/inbox.component';
import { LeaveModule } from './modules/leave/leave.module';
import { OnboardingModule } from './modules/onboarding/onboarding.module';
import { OvertimeModule } from './modules/overtime/overtime.module';
import { PagenotfoundComponent } from './modules/pagenotfound/pagenotfound.component';
import { PerformanceReportComponent } from './modules/performance-report/performance-report.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { ReimbursementModule } from './modules/reimbursement/reimbursement.module';
import { ReportComponent } from './modules/report/report.component';
import { SettingsComponent } from './modules/settings/settings.component';
import { SettingsModule } from './modules/settings/settings.module';
import { SocialModule } from './modules/social/social.module';
import { RouterModule } from '@angular/router';
import { SocialComponent } from './modules/social/social.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ReimbursementListComponent } from './modules/reimbursement/reimbursement-list/reimbursement-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    ProfileComponent,
    InboxComponent,
    ImportDataComponent,
    DocumentComponent,
    ReportComponent,
    PerformanceReportComponent,
    SettingsComponent,
    PagenotfoundComponent,
    SocialComponent,
    ReimbursementListComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    EmployeeModule,
    AttendanceModule,
    OvertimeModule,
    HolidaysModule,
    LeaveModule,
    HelpDeskModule,
    OnboardingModule,
    ReimbursementModule,
    SettingsModule,
    LayoutModule,
    NgbModule,
    AuthModule,
    NgChartsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    SocialModule,
    RouterModule,
    NgSelectModule,
    ReimbursementModule
  ],
})
export class AppModule {}
