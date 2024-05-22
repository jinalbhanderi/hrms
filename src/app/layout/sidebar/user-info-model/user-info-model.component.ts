import { Component, EventEmitter, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-info-model',
  templateUrl: './user-info-model.component.html',
  styleUrls: ['./user-info-model.component.css']
})
export class UserInfoModelComponent {
  @Output() modalClosed = new EventEmitter<string>();

  constructor(public activeModal: NgbActiveModal) {}

  closeModal(reason: string): void {
    this.activeModal.dismiss(reason);
    this.modalClosed.emit(reason);
  }
email: string = 'abhimayani1999@gmail.com';

   copyEmail() {
    navigator.clipboard.writeText(this.email).then(() => {
      console.log('Email copied to clipboard');
      alert('Email copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  }
}
