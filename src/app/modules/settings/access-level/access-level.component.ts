import { Component } from '@angular/core';

@Component({
  selector: 'app-access-level',
  templateUrl: './access-level.component.html',
  styleUrls: ['./access-level.component.css'],
})
export class AccessLevelComponent {
  isSelected: boolean = false;
  addAccess() {
    this.isSelected = !this.isSelected;
  }
}
