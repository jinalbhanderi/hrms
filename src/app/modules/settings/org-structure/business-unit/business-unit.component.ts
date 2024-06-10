import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddBusinessUnitComponent } from './add-business-unit/add-business-unit.component';

@Component({
  selector: 'app-business-unit',
  templateUrl: './business-unit.component.html',
  styleUrls: ['./business-unit.component.css'],
})
export class BusinessUnitComponent {
  constructor(public dialog: MatDialog) {}

  openModal(): void {
    const dialogRef = this.dialog.open(AddBusinessUnitComponent, {});
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
