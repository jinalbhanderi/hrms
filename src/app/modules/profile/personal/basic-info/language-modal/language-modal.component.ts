import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-language-modal',
  templateUrl: './language-modal.component.html',
  styleUrls: ['./language-modal.component.css'],
})
export class LanguageModalComponent {
  @Output() close = new EventEmitter<void>();

  closeModal() {
    debugger;
    this.close.emit();
  }
}
