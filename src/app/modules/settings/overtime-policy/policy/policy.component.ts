import { Component } from '@angular/core';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css'],
})
export class PolicyComponent {
  isSelected: boolean = false;
  addOvertime() {
    this.isSelected = !this.isSelected;
  }
}
