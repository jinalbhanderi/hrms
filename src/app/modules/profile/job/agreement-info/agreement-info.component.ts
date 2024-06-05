import { Component } from '@angular/core';
import { AddAgreementComponent } from './add-agreement/add-agreement.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-agreement-info',
  templateUrl: './agreement-info.component.html',
  styleUrls: ['./agreement-info.component.css'],
})
export class AgreementInfoComponent {
  constructor(public dialog: MatDialog) {}

  openModal(): void {
    const dialogRef = this.dialog.open(AddAgreementComponent, {});

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
