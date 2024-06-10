import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  public modalOpen: boolean = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private modalService: NgbModal
  ) {}
  editProfile() {
    try {
      if (isPlatformBrowser(this.platformId)) {
        this.modalService
          .open(EditProfileComponent, {
            ariaLabelledBy: 'modal',
            centered: false,
            windowClass: 'modal-right',
          })
          .result.then(
            (result: any) => {
              this.modalOpen = true;
              console.log(`Result ${result}`);
            },
            (reason: any) => {
              console.log('Dismissed', reason);
            }
          );
      }
    } catch (error) {
      console.error('Error showing modal:', error);
    }
  }
}
