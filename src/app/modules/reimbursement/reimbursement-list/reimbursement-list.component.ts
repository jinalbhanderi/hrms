import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTripComponent } from './add-trip/add-trip.component';

@Component({
  selector: 'app-reimbursement-list',
  templateUrl: './reimbursement-list.component.html',
  styleUrls: ['./reimbursement-list.component.css'],
})
export class ReimbursementListComponent {
 
  selectedTab: string = 'withTrip';

  selectTab(tab: string) {
    this.selectedTab = tab;
  }
}
