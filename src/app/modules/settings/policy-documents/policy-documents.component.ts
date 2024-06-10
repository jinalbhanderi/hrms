import { Component } from '@angular/core';

@Component({
  selector: 'app-policy-documents',
  templateUrl: './policy-documents.component.html',
  styleUrls: ['./policy-documents.component.css'],
})
export class PolicyDocumentsComponent {
  isSelected: boolean = false;
  addPolicy() {
    this.isSelected = !this.isSelected;
  }
}
