import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-your-timing',
  templateUrl: './your-timing.component.html',
  styleUrls: ['./your-timing.component.css'],
})
export class YourTimingComponent {
  @Input() modalOpen: boolean = false;



  toggleModal(): void {
    this.modalOpen = !this.modalOpen;
  }
}
