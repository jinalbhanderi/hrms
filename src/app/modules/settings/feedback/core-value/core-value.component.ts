import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddCoreValueComponent } from './add-core-value/add-core-value.component';

@Component({
  selector: 'app-core-value',
  templateUrl: './core-value.component.html',
  styleUrls: ['./core-value.component.css'],
})
export class CoreValueComponent {
  constructor(public dialog: MatDialog) {}

  openModal(): void {
    const dialogRef = this.dialog.open(AddCoreValueComponent, {});
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
