import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  public modalOpen: boolean = false;

  constructor() {}

  toggleModal() {
    this.modalOpen = !this.modalOpen;
  }
}
