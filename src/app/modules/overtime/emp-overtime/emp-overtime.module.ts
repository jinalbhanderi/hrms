import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpOvertimeRoutingModule } from './emp-overtime-routing.module';
import { AddAllComponent } from './add-all/add-all.component';
import { OverTimeDataComponent } from './over-time-data/over-time-data.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AddAllComponent,
    OverTimeDataComponent
  ],
  imports: [
    CommonModule,
    EmpOvertimeRoutingModule,
    MatDialogModule
  ]
})
export class EmpOvertimeModule { }
