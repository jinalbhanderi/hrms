import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddAdjustBalanceComponent } from './add-adjust-balance/add-adjust-balance.component';

@Component({
  selector: 'app-adjusted-balance',
  templateUrl: './adjusted-balance.component.html',
  styleUrls: ['./adjusted-balance.component.css'],
})
export class AdjustedBalanceComponent {
  constructor(public dialog: MatDialog) {}

  openModal(): void {
    const dialogRef = this.dialog.open(AddAdjustBalanceComponent, {});
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
