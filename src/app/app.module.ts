import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { InboxComponent } from './modules/inbox/inbox.component';
import { EmployeeModule } from './modules/employee/employee.module';
import { AttendanceModule } from './modules/attendance/attendance.module';
import { OvertimeModule } from './modules/overtime/overtime.module';
import { HolidaysModule } from './modules/holidays/holidays.module';
import { LeaveModule } from './modules/leave/leave.module';
import { HelpDeskModule } from './modules/help-desk/help-desk.module';
import { ImportDataComponent } from './modules/import-data/import-data.component';
import { OnboardingModule } from './modules/onboarding/onboarding.module';
import { DocumentComponent } from './modules/document/document.component';
import { ReportComponent } from './modules/report/report.component';
import { PerformanceReportComponent } from './modules/performance-report/performance-report.component';
import { ReimbursementModule } from './modules/reimbursement/reimbursement.module';
import { SettingsComponent } from './modules/settings/settings.component';
import { SettingsModule } from './modules/settings/settings.module';
import { LayoutModule } from './layout/layout.module';
import { AuthModule } from './modules/auth/auth.module';
import { PagenotfoundComponent } from './modules/pagenotfound/pagenotfound.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';

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
    MatSelectModule
  ],
})
export class AppModule {}
