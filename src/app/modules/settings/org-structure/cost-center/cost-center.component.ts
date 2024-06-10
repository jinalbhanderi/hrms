import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddCostCenterComponent } from './add-cost-center/add-cost-center.component';

@Component({
  selector: 'app-cost-center',
  templateUrl: './cost-center.component.html',
  styleUrls: ['./cost-center.component.css'],
})
export class CostCenterComponent {
  constructor(public dialog: MatDialog) {}

  openModal(): void {
    const dialogRef = this.dialog.open(AddCostCenterComponent, {});

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
