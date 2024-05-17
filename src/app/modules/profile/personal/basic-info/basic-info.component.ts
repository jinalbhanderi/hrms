import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css'],
})
export class BasicInfoComponent {
  showPopup = false;
  isCheckboxChecked: boolean = false;
  isESIChecked: boolean = false;
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
}
