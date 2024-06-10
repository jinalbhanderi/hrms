import { Component } from '@angular/core';

@Component({
  selector: 'app-biometrics',
  templateUrl: './biometrics.component.html',
  styleUrls: ['./biometrics.component.css'],
})
export class BiometricsComponent {
  isSelected: boolean = false;
  addbiometric() {
    this.isSelected = !this.isSelected;
  }
}
