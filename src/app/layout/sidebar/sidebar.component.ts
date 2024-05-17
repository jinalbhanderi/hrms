import { Component, ElementRef, HostListener } from '@angular/core';

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

  constructor(private elementRef: ElementRef) {}

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
}
