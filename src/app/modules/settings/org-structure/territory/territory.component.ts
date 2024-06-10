import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTerritoryComponent } from './add-territory/add-territory.component';

@Component({
  selector: 'app-territory',
  templateUrl: './territory.component.html',
  styleUrls: ['./territory.component.css'],
})
export class TerritoryComponent {
  constructor(public dialog: MatDialog) {}

  openModal(): void {
    const dialogRef = this.dialog.open(AddTerritoryComponent, {});

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
