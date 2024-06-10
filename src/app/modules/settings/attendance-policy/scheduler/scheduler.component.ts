import { Component } from '@angular/core';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css'],
})
export class SchedulerComponent {
  isSelected: boolean = false;
  addScheduler() {
    this.isSelected = !this.isSelected;
  }
}
