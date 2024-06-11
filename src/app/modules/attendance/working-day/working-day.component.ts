import { Component } from '@angular/core';

@Component({
  selector: 'app-working-day',
  templateUrl: './working-day.component.html',
  styleUrls: ['./working-day.component.css'],
})
export class WorkingDayComponent {
  isSelected: boolean = false;
  addWorkingDay() {
    this.isSelected = !this.isSelected;
  }
}
