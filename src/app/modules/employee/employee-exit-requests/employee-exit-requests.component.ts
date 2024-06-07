import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-exit-requests',
  templateUrl: './employee-exit-requests.component.html',
  styleUrls: ['./employee-exit-requests.component.css'],
})
export class EmployeeExitRequestsComponent {
  selectedStatus: string = 'Pending';

  onStatusChange(event: any) {
    this.selectedStatus = event;
  }
}
