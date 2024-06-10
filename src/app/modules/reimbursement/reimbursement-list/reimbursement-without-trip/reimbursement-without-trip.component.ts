import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddReimbursementComponent } from './add-reimbursement/add-reimbursement.component';

@Component({
  selector: 'app-reimbursement-without-trip',
  templateUrl: './reimbursement-without-trip.component.html',
  styleUrls: ['./reimbursement-without-trip.component.css'],
})
export class ReimbursementWithoutTripComponent {
  constructor(public dialog: MatDialog) {}

  openModal(): void {
    const dialogRef = this.dialog.open(AddReimbursementComponent, {});
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
