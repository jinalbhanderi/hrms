import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTripComponent } from '../add-trip/add-trip.component';

@Component({
  selector: 'app-reimbursement-with-trip',
  templateUrl: './reimbursement-with-trip.component.html',
  styleUrls: ['./reimbursement-with-trip.component.css'],
})
export class ReimbursementWithTripComponent {
  constructor(public dialog: MatDialog) {}

  openModal(): void {
    const dialogRef = this.dialog.open(AddTripComponent, {});

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
