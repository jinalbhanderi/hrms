import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  {path:'category',component:CategoryComponent},
  {path:'department',component: DepartmentComponent},
  {path:'sub-department',component: SubDepartmentComponent},
  {path:'job-title',component: JobTitleComponent},
  {path:'documents',component: DocumentsComponent},
  {path:'degree',component: DegreeComponent},
  {path:'relationship',component: RelationshipComponent},
  {path:'status',component: StatusComponent},
  {path:'location-activity',component: LocationActivityComponent},
  {path:'letter-type',component: LetterTypeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeFieldsRoutingModule { }
