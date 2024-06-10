import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BasicActivityViewDetailsComponent } from '../basic-activity-view-details/basic-activity-view-details.component';

@Component({
  selector: 'app-activity-log-basic',
  templateUrl: './activity-log-basic.component.html',
  styleUrls: ['./activity-log-basic.component.css'],
})
export class ActivityLogBasicComponent {
  constructor(public dialog: MatDialog) {}

  openModal(): void {
    const dialogRef = this.dialog.open(BasicActivityViewDetailsComponent, {});

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
