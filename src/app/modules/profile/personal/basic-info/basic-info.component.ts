import { Component, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivityLogComponent } from './activity-log/activity-log.component';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css'],
})
export class BasicInfoComponent {
  showPopup = false;
  isCheckboxChecked: boolean = false;
  isESIChecked: boolean = false;
  selectedCity: any;

  toggleCheckbox() {
    this.isCheckboxChecked = !this.isCheckboxChecked;
  }
  openPopup() {
    this.showPopup = true;
  }
  toggleESICheckbox() {
    this.isESIChecked = !this.isESIChecked;
  }

  showNestedCheckboxes: boolean = false;

  toggleNestedCheckboxes(event: any) {
    this.showNestedCheckboxes = event.target.checked;
  }
  closePopup() {
    this.showPopup = false;
  }

  out = new EventEmitter();
  constructor(public dialog: MatDialog) {}
  cities = [
    { id: 1, name: 'Vilnius' },
    { id: 2, name: 'Kaunas' },
    { id: 3, name: 'Pavilnys', disabled: true },
    { id: 4, name: 'Pabradė' },
    { id: 5, name: 'Klaipėda' },
  ];

  toppings = new FormControl('');
  toppingList: string[] = [
    'Extra cheese',
    'Mushroom',
    'Onion',
    'Pepperoni',
    'Sausage',
    'Tomato',
  ];

  openModal(): void {
    const dialogRef = this.dialog.open(ActivityLogComponent, {});

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
