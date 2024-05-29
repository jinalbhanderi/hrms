import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

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
