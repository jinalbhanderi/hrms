import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentsRoutingModule } from './documents-routing.module';
import { PersonalDocumentsComponent } from './personal-documents/personal-documents.component';
import { OfficialDocumentsComponent } from './official-documents/official-documents.component';
import { OtherDocumentsComponent } from './other-documents/other-documents.component';
import { AddNewDocumentComponent } from './personal-documents/add-new-document/add-new-document.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PersonalDocumentsComponent,
    OfficialDocumentsComponent,
    OtherDocumentsComponent,
    AddNewDocumentComponent
  ],
  imports: [
    CommonModule,
    DocumentsRoutingModule,
    MatDialogModule,
    NgSelectModule,
    FormsModule
  ]
})
export class DocumentsModule { }
