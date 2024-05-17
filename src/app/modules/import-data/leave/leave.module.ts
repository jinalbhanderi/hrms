import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaveRoutingModule } from './leave-routing.module';
import { ImportLeaveComponent } from './import-leave/import-leave.component';
import { ImportLeavePolicyComponent } from './import-leave-policy/import-leave-policy.component';


@NgModule({
  declarations: [
    ImportLeaveComponent,
    ImportLeavePolicyComponent
  ],
  imports: [
    CommonModule,
    LeaveRoutingModule
  ]
})
export class LeaveModule { }
