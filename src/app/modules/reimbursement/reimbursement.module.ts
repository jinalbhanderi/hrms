import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReimbursementRoutingModule } from './reimbursement-routing.module';
import { AddTripComponent } from './reimbursement-list/add-trip/add-trip.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NgSelectModule } from '@ng-select/ng-select';
import { ReimbursementWithTripComponent } from './reimbursement-list/reimbursement-with-trip/reimbursement-with-trip.component';
import { ReimbursementWithoutTripComponent } from './reimbursement-list/reimbursement-without-trip/reimbursement-without-trip.component';
import { AddReimbursementComponent } from './reimbursement-list/reimbursement-without-trip/add-reimbursement/add-reimbursement.component';

@NgModule({
  declarations: [
    AddTripComponent,
    ReimbursementWithTripComponent,
    ReimbursementWithoutTripComponent,
    AddReimbursementComponent,
  ],
  imports: [
    CommonModule,
    ReimbursementRoutingModule,
    MatDialogModule,
    NgSelectModule,
  ],
  exports: [ReimbursementWithTripComponent, ReimbursementWithoutTripComponent],
})
export class ReimbursementModule {}
