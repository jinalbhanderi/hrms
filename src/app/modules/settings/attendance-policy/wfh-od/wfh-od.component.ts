import { Component } from '@angular/core';

@Component({
  selector: 'app-wfh-od',
  templateUrl: './wfh-od.component.html',
  styleUrls: ['./wfh-od.component.css'],
})
export class WfhOdComponent {
  isSelected: boolean = false;
  addduty() {
    this.isSelected = !this.isSelected;
  }
}
