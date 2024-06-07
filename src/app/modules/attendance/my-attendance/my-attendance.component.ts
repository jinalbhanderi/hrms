import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TimesheetComponent } from './timesheet/timesheet.component';

@Component({
  selector: 'app-my-attendance',
  templateUrl: './my-attendance.component.html',
  styleUrls: ['./my-attendance.component.css'],
})
export class MyAttendanceComponent {
  constructor(public dialog: MatDialog) {}

  openModal(): void {
    const dialogRef = this.dialog.open(TimesheetComponent, {});
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
