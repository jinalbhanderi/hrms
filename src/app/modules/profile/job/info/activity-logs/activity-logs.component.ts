import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-activity-logs',
  templateUrl: './activity-logs.component.html',
  styleUrls: ['./activity-logs.component.css'],
})
export class ActivityLogsComponent {
  constructor(public dialogRef: MatDialogRef<any>) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
}
