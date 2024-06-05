import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddNewDocumentComponent } from './add-new-document/add-new-document.component';

@Component({
  selector: 'app-personal-documents',
  templateUrl: './personal-documents.component.html',
  styleUrls: ['./personal-documents.component.css'],
})
export class PersonalDocumentsComponent {
  constructor(public dialog: MatDialog) {}

  openModal(): void {
    const dialogRef = this.dialog.open(AddNewDocumentComponent, {});
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
