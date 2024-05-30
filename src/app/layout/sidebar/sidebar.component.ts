import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserInfoModelComponent } from './user-info-model/user-info-model.component';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  isExpanded: boolean = false;
  attendance: boolean = false;
  overtime: boolean = false;
  holidays: boolean = false;
  leave: boolean = false;
  helpdesk: boolean = false;
  onboarding: boolean = false;
  reimbursement: boolean = false;
  showUserInfoModal: boolean = false;
  public modalOpen: boolean = false;
  isParentActive = false;
popTemplate: any;

  constructor(
    private elementRef: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object,
    private modalService: NgbModal,
    private router: Router
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // this.checkIfParentIsActive();
      }
    });
  }
//  checkIfParentIsActive(): void {
//     const parentRoutes = [
//       '/directory',
//       '/organization-tree',
//       '/employees',
//       '/employees-probation',
//       '/resignation',
//       '/agreement',
//       '/compensation-list',
//       '/profile-requests',
//       '/exit-requests',
//       '/settlement-list'
//     ];

//     this.isParentActive = parentRoutes.some(route => this.router.url.startsWith(route));
//   }
  toggleMenu(menuType: string): void {
    // Collapse all other menu items and expand/collapse the selected menu item
    if (menuType === 'expand') {
      this.isExpanded = !this.isExpanded;
      this.attendance = false;
      this.overtime = false;
      this.holidays = false;
      this.leave = false;
      this.helpdesk = false;
      this.onboarding = false;
      this.reimbursement = false;
    } else if (menuType === 'attendance') {
      this.attendance = !this.attendance;
      this.isExpanded = false;
      this.overtime = false;
      this.holidays = false;
      this.leave = false;
      this.helpdesk = false;
      this.onboarding = false;
      this.reimbursement = false;
    } else if (menuType === 'overtime') {
      this.overtime = !this.overtime;
      this.isExpanded = false;
      this.attendance = false;
      this.holidays = false;
      this.leave = false;
      this.helpdesk = false;
      this.onboarding = false;
      this.reimbursement = false;
    } else if (menuType === 'holidays') {
      this.holidays = !this.holidays;
      this.isExpanded = false;
      this.attendance = false;
      this.overtime = false;
      this.leave = false;
      this.helpdesk = false;
      this.onboarding = false;
      this.reimbursement = false;
    } else if (menuType === 'leave') {
      this.leave = !this.leave;
      this.holidays = false;
      this.isExpanded = false;
      this.attendance = false;
      this.overtime = false;
      this.helpdesk = false;
      this.onboarding = false;
      this.reimbursement = false;
    } else if (menuType === 'helpdesk') {
      this.helpdesk = !this.helpdesk;
      this.leave = false;
      this.holidays = false;
      this.isExpanded = false;
      this.attendance = false;
      this.overtime = false;
      this.onboarding = false;
      this.reimbursement = false;
    } else if (menuType === 'onboarding') {
      this.onboarding = !this.onboarding;
      this.helpdesk = false;
      this.leave = false;
      this.holidays = false;
      this.isExpanded = false;
      this.attendance = false;
      this.overtime = false;
      this.reimbursement = false;
    } else if (menuType === 'reimbursement') {
      this.reimbursement = !this.reimbursement;
      this.onboarding = false;
      this.helpdesk = false;
      this.leave = false;
      this.holidays = false;
      this.isExpanded = false;
      this.attendance = false;
      this.overtime = false;
    }
  }

  @HostListener('document:click', ['$event'])
  onClick(event: Event): void {
    // Close all menu items when clicking outside the sidebar
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isExpanded = false;
      this.attendance = false;
      this.overtime = false;
      this.holidays = false;
      this.leave = false;
      this.helpdesk = false;
    }
  }

  public showModal(): void {
    try {
      if (isPlatformBrowser(this.platformId)) {
        this.modalService
          .open(UserInfoModelComponent, {
            size: '400px',
            ariaLabelledBy: 'modal',
            centered: false,
            windowClass: 'modal-right',
          })
          .result.then(
            (result: any) => {
              this.modalOpen = true;
              `Result ${result}`;
            },
            (reason: any) => {}
          );
      }
    } catch (error) {
      console.error('Error showing modal:', error);
    }
  }
}
