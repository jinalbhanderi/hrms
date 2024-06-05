import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddJobInformationComponent } from './add-job-information/add-job-information.component';
import { ActivityLogsComponent } from './activity-logs/activity-logs.component';
import { EditJobInformationComponent } from './edit-job-information/edit-job-information.component';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent {
  constructor(public dialog: MatDialog) {}

  openModal(): void {
    const dialogRef = this.dialog.open(AddJobInformationComponent, {});
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  openActiveModal(): void {
    const dialogRef = this.dialog.open(ActivityLogsComponent, {});
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
  openeditActiveModal(): void {
    const dialogRef = this.dialog.open(EditJobInformationComponent, {});
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
