import { Component } from '@angular/core';

@Component({
  selector: 'app-geo-fencing',
  templateUrl: './geo-fencing.component.html',
  styleUrls: ['./geo-fencing.component.css'],
})
export class GeoFencingComponent {
  isSelected: boolean = false;
  addgeo() {
    this.isSelected = !this.isSelected;
  }
}
