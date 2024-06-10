import { Component } from '@angular/core';

@Component({
  selector: 'app-sub-company',
  templateUrl: './sub-company.component.html',
  styleUrls: ['./sub-company.component.css'],
})
export class SubCompanyComponent {
  isSelected: boolean = false;
  addSubCompany() {
    this.isSelected = !this.isSelected;
  }
}
