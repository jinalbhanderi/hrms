import { Component } from '@angular/core';

@Component({
  selector: 'app-penalisation',
  templateUrl: './penalisation.component.html',
  styleUrls: ['./penalisation.component.css'],
})
export class PenalisationComponent {
  isSelected: boolean = false;
  addPenalisation() {
    this.isSelected = !this.isSelected;
  }
}
