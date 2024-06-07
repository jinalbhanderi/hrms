import { Component } from '@angular/core';
import { AddAgreementComponent } from './add-agreement/add-agreement.component';
import { MatDialog } from '@angular/material/dialog';
import { ActivityLogsOfAgreementComponent } from './activity-logs-of-agreement/activity-logs-of-agreement.component';
import { AgreementsDetailsComponent } from './agreements-details/agreements-details.component';

@Component({
  selector: 'app-agreement-list',
  templateUrl: './agreement-list.component.html',
  styleUrls: ['./agreement-list.component.css'],
})
export class AgreementListComponent {
  constructor(public dialog: MatDialog) {}

  openModal(): void {
    const dialogRef = this.dialog.open(AddAgreementComponent, {});
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
  openAgreemntModal(): void {
    const dialogRef = this.dialog.open(ActivityLogsOfAgreementComponent, {});
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
  openAgreemntDetailModal(): void {
    const dialogRef = this.dialog.open(AgreementsDetailsComponent, {});
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
