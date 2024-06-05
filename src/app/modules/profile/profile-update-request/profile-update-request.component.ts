import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-update-request',
  templateUrl: './profile-update-request.component.html',
  styleUrls: ['./profile-update-request.component.css'],
})
export class ProfileUpdateRequestComponent {
  currentStatus: string = 'pending';
  currentPage: string = 'pending';

  statuses = [
    { value: 'pending', label: 'Pending' },
    { value: 'approved', label: 'Approved' },
    { value: 'rejected', label: 'Rejected' },
    { value: 'cancelled', label: 'Cancelled' },
  ];

  onStatusChange(event: any) {
    this.currentPage = event;
  }
}
