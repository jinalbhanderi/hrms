import { Component } from '@angular/core';

@Component({
  selector: 'app-pay-codes',
  templateUrl: './pay-codes.component.html',
  styleUrls: ['./pay-codes.component.css'],
})
export class PayCodesComponent {
  isSelected: boolean = false;
  addPaycode() {
    this.isSelected = !this.isSelected;
  }
}
