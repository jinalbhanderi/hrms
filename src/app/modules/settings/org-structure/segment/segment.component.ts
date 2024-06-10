import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddSegmentComponent } from './add-segment/add-segment.component';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.component.html',
  styleUrls: ['./segment.component.css'],
})
export class SegmentComponent {
  constructor(public dialog: MatDialog) {}

  openModal(): void {
    const dialogRef = this.dialog.open(AddSegmentComponent, {});

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
