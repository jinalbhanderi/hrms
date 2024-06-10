import { Component } from '@angular/core';

@Component({
  selector: 'app-break',
  templateUrl: './break.component.html',
  styleUrls: ['./break.component.css'],
})
export class BreakComponent {
  isSelected: boolean = false;
  addBreak() {
    this.isSelected = !this.isSelected;
  }
}
