import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeFieldsRoutingModule } from './employee-fields-routing.module';
import { CategoryComponent } from './category/category.component';
import { DepartmentComponent } from './department/department.component';
import { SubDepartmentComponent } from './sub-department/sub-department.component';
import { JobTitleComponent } from './job-title/job-title.component';
import { DocumentsComponent } from './documents/documents.component';
import { DegreeComponent } from './degree/degree.component';
import { RelationshipComponent } from './relationship/relationship.component';
import { StatusComponent } from './status/status.component';
import { LocationActivityComponent } from './location-activity/location-activity.component';
import { LetterTypeComponent } from './letter-type/letter-type.component';


@NgModule({
  declarations: [
    CategoryComponent,
    DepartmentComponent,
    SubDepartmentComponent,
    JobTitleComponent,
    DocumentsComponent,
    DegreeComponent,
    RelationshipComponent,
    StatusComponent,
    LocationActivityComponent,
    LetterTypeComponent
  ],
  imports: [
    CommonModule,
    EmployeeFieldsRoutingModule
  ]
})
export class EmployeeFieldsModule { }
