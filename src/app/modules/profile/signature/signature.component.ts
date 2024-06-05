import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditSignatureComponent } from './edit-signature/edit-signature.component';
import { CreateSignatureComponent } from './create-signature/create-signature.component';

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.css'],
})
export class SignatureComponent {
  constructor(public dialog: MatDialog) {}

  openModal(): void {
    const dialogRef = this.dialog.open(EditSignatureComponent, {});
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
  openSignatureModal(): void {
    const dialogRef = this.dialog.open(CreateSignatureComponent, {});
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
