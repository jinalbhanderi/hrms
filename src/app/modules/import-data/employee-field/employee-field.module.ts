import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeFieldRoutingModule } from './employee-field-routing.module';
import { CategoryComponent } from './category/category.component';
import { DepartmentComponent } from './department/department.component';
import { SubDepartmentComponent } from './sub-department/sub-department.component';
import { JobTitleComponent } from './job-title/job-title.component';
import { PersonalDocumentComponent } from './personal-document/personal-document.component';
import { DegreeComponent } from './degree/degree.component';
import { RelationshipComponent } from './relationship/relationship.component';
import { EmployeeStatusComponent } from './employee-status/employee-status.component';
import { EmployeeExitComponent } from './employee-exit/employee-exit.component';
import { LocationActivityComponent } from './location-activity/location-activity.component';
import { LetterTypeComponent } from './letter-type/letter-type.component';


@NgModule({
  declarations: [
    CategoryComponent,
    DepartmentComponent,
    SubDepartmentComponent,
    JobTitleComponent,
    PersonalDocumentComponent,
    DegreeComponent,
    RelationshipComponent,
    EmployeeStatusComponent,
    EmployeeExitComponent,
    LocationActivityComponent,
    LetterTypeComponent
  ],
  imports: [
    CommonModule,
    EmployeeFieldRoutingModule
  ]
})
export class EmployeeFieldModule { }
