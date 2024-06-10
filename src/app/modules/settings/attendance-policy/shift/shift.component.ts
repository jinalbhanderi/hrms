import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ShiftManagementComponent } from './shift-management/shift-management.component';
import { AssignEmployeeComponent } from './assign-employee/assign-employee.component';

@Component({
  selector: 'app-shift',
  templateUrl: './shift.component.html',
  styleUrls: ['./shift.component.css'],
})
export class ShiftComponent {
  isSelected: boolean = false;
  constructor(public dialog: MatDialog) {}

  openModal(): void {
    const dialogRef = this.dialog.open(AssignEmployeeComponent, {});
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
  addSubCompany() {
    this.isSelected = !this.isSelected;
  }
}
