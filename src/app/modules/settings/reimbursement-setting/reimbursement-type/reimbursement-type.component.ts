import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddReimbursementComponent } from 'src/app/modules/reimbursement/reimbursement-list/reimbursement-without-trip/add-reimbursement/add-reimbursement.component';

@Component({
  selector: 'app-reimbursement-type',
  templateUrl: './reimbursement-type.component.html',
  styleUrls: ['./reimbursement-type.component.css'],
})
export class ReimbursementTypeComponent {
  constructor(public dialog: MatDialog) {}

  openModal(): void {
    const dialogRef = this.dialog.open(AddReimbursementComponent, {});
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
