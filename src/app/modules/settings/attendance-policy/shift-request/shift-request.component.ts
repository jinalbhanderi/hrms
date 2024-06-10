import { Component } from '@angular/core';

@Component({
  selector: 'app-shift-request',
  templateUrl: './shift-request.component.html',
  styleUrls: ['./shift-request.component.css'],
})
export class ShiftRequestComponent {
  isSelected: boolean = false;

  addShift() {
    this.isSelected = !this.isSelected;
  }
}
