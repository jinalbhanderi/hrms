import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-absent-today',
  templateUrl: './absent-today.component.html',
  styleUrls: ['./absent-today.component.css'],
})
export class AbsentTodayComponent {
  constructor(public activeModal: NgbActiveModal) {}

  close(): void {
    this.activeModal.close('Close click');
  }
}
