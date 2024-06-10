import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddBandComponent } from './add-band/add-band.component';

@Component({
  selector: 'app-bands',
  templateUrl: './bands.component.html',
  styleUrls: ['./bands.component.css'],
})
export class BandsComponent {
  constructor(public dialog: MatDialog) {}

  openModal(): void {
    const dialogRef = this.dialog.open(AddBandComponent, {});
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
