import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddInsurancetypeComponent } from './add-insurancetype/add-insurancetype.component';

@Component({
  selector: 'app-insurance-type',
  templateUrl: './insurance-type.component.html',
  styleUrls: ['./insurance-type.component.css'],
})
export class InsuranceTypeComponent {
  constructor(public dialog: MatDialog) {}

  openModal(): void {
    const dialogRef = this.dialog.open(AddInsurancetypeComponent, {});
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
