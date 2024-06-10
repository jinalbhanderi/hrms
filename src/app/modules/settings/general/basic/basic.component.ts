import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivityLogBasicComponent } from './activity-log-basic/activity-log-basic.component';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css'],
})
export class BasicComponent {
  isAutoIncrement: boolean = false;
  constructor(public dialog: MatDialog) {}

  openModal(): void {
    const dialogRef = this.dialog.open(ActivityLogBasicComponent, {});
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  onRadioChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.isAutoIncrement = target.value === 'auto-increment';
  }
}
