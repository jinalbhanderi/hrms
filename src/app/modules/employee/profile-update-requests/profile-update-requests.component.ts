import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-update-requests',
  templateUrl: './profile-update-requests.component.html',
  styleUrls: ['./profile-update-requests.component.css'],
})
export class ProfileUpdateRequestsComponent {
  selectedStatus: string = 'Pending';

  onStatusChange(event: any) {
    this.selectedStatus = event;
  }
}
