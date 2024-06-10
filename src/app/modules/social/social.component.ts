import { Component } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css'],
})
export class SocialComponent {
  currentComponent: string = '';
  postForm: boolean = false;
  data: boolean = false;

  showComponent(component: string) {
    this.currentComponent = component;
  }
  openPostform() {
    this.postForm = !this.postForm;
  }
  openData() {
    this.data = !this.data;
  }
}
