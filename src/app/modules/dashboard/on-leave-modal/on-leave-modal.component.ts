import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-on-leave-modal',
  templateUrl: './on-leave-modal.component.html',
  styleUrls: ['./on-leave-modal.component.css'],
})
export class OnLeaveModalComponent {
  constructor(public activeModal: NgbActiveModal) {}

  close(): void {
    this.activeModal.close('Close click');
  }
}
