import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentsRoutingModule } from './documents-routing.module';
import { PersonalDocumentsComponent } from './personal-documents/personal-documents.component';
import { OfficialDocumentsComponent } from './official-documents/official-documents.component';
import { OtherDocumentsComponent } from './other-documents/other-documents.component';


@NgModule({
  declarations: [
    PersonalDocumentsComponent,
    OfficialDocumentsComponent,
    OtherDocumentsComponent
  ],
  imports: [
    CommonModule,
    DocumentsRoutingModule
  ]
})
export class DocumentsModule { }
