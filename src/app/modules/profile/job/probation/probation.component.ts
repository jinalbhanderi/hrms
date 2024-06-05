import { Component } from '@angular/core';
import { ActivityLogsComponent } from './activity-logs/activity-logs.component';
import { MatDialog } from '@angular/material/dialog';
import { ProbationStatusComponent } from './probation-status/probation-status.component';

@Component({
  selector: 'app-probation',
  templateUrl: './probation.component.html',
  styleUrls: ['./probation.component.css'],
})
export class ProbationComponent {
  constructor(public dialog: MatDialog) {}

  openModal(): void {
    const dialogRef = this.dialog.open(ActivityLogsComponent, {});

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
  openProbationModal(): void {
    const dialogRef = this.dialog.open(ProbationStatusComponent, {});

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
