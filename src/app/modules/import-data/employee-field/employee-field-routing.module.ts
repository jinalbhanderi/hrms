import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { CategoryComponent } from './category/category.component';
import { JobTitleComponent } from './job-title/job-title.component';
import { SubDepartmentComponent } from './sub-department/sub-department.component';
import { PersonalDocumentComponent } from './personal-document/personal-document.component';
import { DegreeComponent } from './degree/degree.component';
import { RelationshipComponent } from './relationship/relationship.component';
import { EmployeeStatusComponent } from './employee-status/employee-status.component';
import { EmployeeExitComponent } from './employee-exit/employee-exit.component';
import { LocationActivityComponent } from './location-activity/location-activity.component';

const routes: Routes = [
  {path:'category',component:CategoryComponent},
  {path:'department',component:DepartmentComponent},
  {path:'sub-department',component: SubDepartmentComponent},
  {path:'job-title',component: JobTitleComponent},
  {path:'personal-document',component:PersonalDocumentComponent},
  {path:'degree',component:DegreeComponent},
  {path:'relationship',component:RelationshipComponent},
  {path:'employee-status',component:EmployeeStatusComponent},
  {path:'employee-exit',component:EmployeeExitComponent},
  {path:'location-activity',component:LocationActivityComponent},
  {path:'letter-type',component:CategoryComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeFieldRoutingModule { }
