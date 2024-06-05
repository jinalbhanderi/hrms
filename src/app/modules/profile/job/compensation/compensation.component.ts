import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddCompensationComponent } from './add-compensation/add-compensation.component';
import { ViewSalaryComponent } from './view-salary/view-salary.component';
import { ViewSalaryDataComponent } from './view-salary-data/view-salary-data.component';
import { ActivityLogsComponent } from './activity-logs/activity-logs.component';

@Component({
  selector: 'app-compensation',
  templateUrl: './compensation.component.html',
  styleUrls: ['./compensation.component.css'],
})
export class CompensationComponent {
  constructor(public dialog: MatDialog) {}

  openModal(): void {
    const dialogRef = this.dialog.open(AddCompensationComponent, {});

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
  openSalaryModel(): void {
    const dialogRef = this.dialog.open(ViewSalaryComponent, {});
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
  openSalaryDataModel(): void {
    const dialogRef = this.dialog.open(ViewSalaryDataComponent, {});
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
  openActivityLogsModel(): void {
    const dialogRef = this.dialog.open(ActivityLogsComponent, {});
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
