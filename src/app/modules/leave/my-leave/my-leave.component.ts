import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdjustBalanceComponent } from './adjust-balance/adjust-balance.component';

@Component({
  selector: 'app-my-leave',
  templateUrl: './my-leave.component.html',
  styleUrls: ['./my-leave.component.css'],
})
export class MyLeaveComponent {
  constructor(public dialog: MatDialog) {}

  openModal(): void {
    const dialogRef = this.dialog.open(AdjustBalanceComponent, {});

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
