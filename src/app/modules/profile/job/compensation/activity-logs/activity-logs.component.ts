import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-activity-logs',
  templateUrl: './activity-logs.component.html',
  styleUrls: ['./activity-logs.component.css'],
  standalone:true,
  imports: [ NgSelectModule,NgbModule,FormsModule],
})
export class ActivityLogsComponent {
  constructor(public dialogRef: MatDialogRef<any>) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
}
