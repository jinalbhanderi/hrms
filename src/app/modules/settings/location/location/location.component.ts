import { Component } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
})
export class LocationComponent {
  isSelected: boolean = false;
  addLocation() {
    this.isSelected = !this.isSelected;
  }
}
