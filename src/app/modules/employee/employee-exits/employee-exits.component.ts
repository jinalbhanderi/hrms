import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeExitDetailsComponent } from './employee-exit-details/employee-exit-details.component';
import { AddEmployeeExitComponent } from './add-employee-exit/add-employee-exit.component';
import { FilterOfExitComponent } from './filter-of-exit/filter-of-exit.component';
import { RevokeReasonComponent } from './revoke-reason/revoke-reason.component';

@Component({
  selector: 'app-employee-exits',
  templateUrl: './employee-exits.component.html',
  styleUrls: ['./employee-exits.component.css'],
})
export class EmployeeExitsComponent {
  constructor(public dialog: MatDialog) {}
  selectedStatus: string = 'Active Employee';

  onStatusChange(event: any): void {
    this.selectedStatus = event;
  }

  openModal(): void {
    const dialogRef = this.dialog.open(EmployeeExitDetailsComponent, {});
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
  openAddExitModal(): void {
    const dialogRef = this.dialog.open(AddEmployeeExitComponent, {});
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
  openFilterModal(): void {
    const dialogRef = this.dialog.open(FilterOfExitComponent, {});
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
  openRevokeModal(): void {
    const dialogRef = this.dialog.open(RevokeReasonComponent, {});
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
