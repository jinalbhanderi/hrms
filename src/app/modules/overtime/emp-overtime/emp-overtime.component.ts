import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OverTimeDataComponent } from './over-time-data/over-time-data.component';

@Component({
  selector: 'app-emp-overtime',
  templateUrl: './emp-overtime.component.html',
  styleUrls: ['./emp-overtime.component.css'],
})
export class EmpOvertimeComponent {
  overtime: string = 'Pending';
  constructor(public dialog: MatDialog) {}

  openModal(): void {
    const dialogRef = this.dialog.open(OverTimeDataComponent, {});
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
