import { Component } from '@angular/core';

@Component({
  selector: 'app-emp-on-duty-request',
  templateUrl: './emp-on-duty-request.component.html',
  styleUrls: ['./emp-on-duty-request.component.css'],
})
export class EmpOnDutyRequestComponent {
  isSelected: boolean = false;
  applyOnDuty() {
    this.isSelected = !this.isSelected;
  }
}
