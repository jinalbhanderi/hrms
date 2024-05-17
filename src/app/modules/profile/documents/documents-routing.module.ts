import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalDocumentsComponent } from './personal-documents/personal-documents.component';
import { OfficialDocumentsComponent } from './official-documents/official-documents.component';
import { OtherDocumentsComponent } from './other-documents/other-documents.component';

const routes: Routes = [
  {path:'personal' ,component:PersonalDocumentsComponent},
  {path:'official' ,component:OfficialDocumentsComponent},
  {path:'other' ,component:OtherDocumentsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentsRoutingModule { }
