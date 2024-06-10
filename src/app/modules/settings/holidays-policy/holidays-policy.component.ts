import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddHolidayComponent } from './add-holiday/add-holiday.component';

@Component({
  selector: 'app-holidays-policy',
  templateUrl: './holidays-policy.component.html',
  styleUrls: ['./holidays-policy.component.css'],
})
export class HolidaysPolicyComponent {
  constructor(public dialog: MatDialog) {}
  openModal(): void {
    const dialogRef = this.dialog.open(AddHolidayComponent, {});
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
