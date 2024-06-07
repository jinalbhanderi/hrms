import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FilterOfProbaionComponent } from './filter-of-probaion/filter-of-probaion.component';

@Component({
  selector: 'app-employees-probation',
  templateUrl: './employees-probation.component.html',
  styleUrls: ['./employees-probation.component.css'],
})
export class EmployeesProbationComponent {
  constructor(public dialog: MatDialog) {}

  openModal(): void {
    const dialogRef = this.dialog.open(FilterOfProbaionComponent, {});
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
