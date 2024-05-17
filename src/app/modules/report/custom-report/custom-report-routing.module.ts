import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DesignationDetailComponent } from './designation-detail/designation-detail.component';
import { LocationWiseComponent } from './location-wise/location-wise.component';
import { GenderWiseComponent } from './gender-wise/gender-wise.component';
import { DepartmentComponent } from './department/department.component';
import { SubDepartmentComponent } from './sub-department/sub-department.component';
import { ZoneComponent } from './zone/zone.component';
import { InboxAuditLogComponent } from './inbox-audit-log/inbox-audit-log.component';

const routes: Routes = [
  {path:'department-detail',component:DepartmentDetailComponent},
  {path:'designation-detail',component:DesignationDetailComponent},
  {path:'location-wise',component:LocationWiseComponent},
  {path:'gender-wise',component:GenderWiseComponent},
  {path:'department',component:DepartmentComponent},
  {path:'sub-department',component:SubDepartmentComponent},
  {path:'zone',component:ZoneComponent},
  {path:'inbox-audit-log',component:InboxAuditLogComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomReportRoutingModule { }
