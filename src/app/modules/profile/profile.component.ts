import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  public modalOpen: boolean = false;
  employeeId: any;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.employeeId = params['id'] || null;
    });
  }

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

  getQueryParams(): { id?: string } {
    return this.employeeId ? { id: this.employeeId } : {};
  }

  getRouterLinkPath(path: string) {
    const queryParams = this.getQueryParams();
    if (queryParams.id) {
      const navigationExtras: NavigationExtras = {
        queryParams: { id: queryParams.id },
      };
      this.router.navigate([`/employees/${path}`], navigationExtras);
    } else {
      this.router.navigate([`/profile/${path}`]);
    }
  }
}
