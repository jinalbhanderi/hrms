import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddWorkLogComponent } from './add-work-log/add-work-log.component';

@Component({
  selector: 'app-emp-status-report',
  templateUrl: './emp-status-report.component.html',
  styleUrls: ['./emp-status-report.component.css'],
})
export class EmpStatusReportComponent {
  constructor(public dialog: MatDialog) {}

  openModal(): void {
    const dialogRef = this.dialog.open(AddWorkLogComponent, {});

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
