import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddWorkLogComponent } from './add-work-log/add-work-log.component';
import { ReportSummaryComponent } from './report-summary/report-summary.component';

@Component({
  selector: 'app-my-status-report',
  templateUrl: './my-status-report.component.html',
  styleUrls: ['./my-status-report.component.css'],
})
export class MyStatusReportComponent {
  constructor(public dialog: MatDialog) {}

  openModal(): void {
    const dialogRef = this.dialog.open(AddWorkLogComponent, {});
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
  openSummaryModal(): void {
    const dialogRef = this.dialog.open(ReportSummaryComponent, {});
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
