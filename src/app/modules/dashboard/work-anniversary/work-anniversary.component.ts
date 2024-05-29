import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-work-anniversary',
  templateUrl: './work-anniversary.component.html',
  styleUrls: ['./work-anniversary.component.css'],
})
export class WorkAnniversaryComponent {
  constructor(public activeModal: NgbActiveModal) {}

  close(): void {
    this.activeModal.close('Close click');
  }
}
