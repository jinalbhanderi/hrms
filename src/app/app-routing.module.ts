import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { InboxComponent } from './modules/inbox/inbox.component';
import { SocialComponent } from './modules/social/social.component';
import { ImportDataComponent } from './modules/import-data/import-data.component';
import { DocumentComponent } from './modules/document/document.component';
import { ReportComponent } from './modules/report/report.component';
import { PerformanceReportComponent } from './modules/performance-report/performance-report.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {path:'dashboard' , component:DashboardComponent},
  {path:'inbox' , component:InboxComponent},
  {path:'announcement' , component:SocialComponent},
  {path:'document' , component:DocumentComponent},
  {path:'performance-report' , component:PerformanceReportComponent},
  { path: 'settings', loadChildren: () => import('./modules/settings/settings.module').then(m => m.SettingsModule) },
  { path: 'profile', loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule) },
  { path: 'reports', loadChildren: () => import('./modules/report/report.module').then(m => m.ReportModule) },
  { path: 'import-data', loadChildren: () => import('./modules/import-data/import-data.module').then(m => m.ImportDataModule) }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
