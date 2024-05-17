import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomReportRoutingModule } from './custom-report-routing.module';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { LocationWiseComponent } from './location-wise/location-wise.component';
import { GenderWiseComponent } from './gender-wise/gender-wise.component';
import { DepartmentComponent } from './department/department.component';
import { SubDepartmentComponent } from './sub-department/sub-department.component';
import { ZoneComponent } from './zone/zone.component';
import { InboxAuditLogComponent } from './inbox-audit-log/inbox-audit-log.component';
import { DesignationDetailComponent } from './designation-detail/designation-detail.component';


@NgModule({
  declarations: [
    DepartmentDetailComponent,
    LocationWiseComponent,
    GenderWiseComponent,
    DepartmentComponent,
    SubDepartmentComponent,
    ZoneComponent,
    InboxAuditLogComponent,
    DesignationDetailComponent
  ],
  imports: [
    CommonModule,
    CustomReportRoutingModule
  ]
})
export class CustomReportModule { }
