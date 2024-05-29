import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardRightComponent } from './dashboard-right/dashboard-right.component';
import { NgChartsModule } from 'ng2-charts';
import { OnLeaveModalComponent } from './on-leave-modal/on-leave-modal.component';
import { AbsentTodayComponent } from './absent-today/absent-today.component';
import { WorkAnniversaryComponent } from './work-anniversary/work-anniversary.component';


@NgModule({
  declarations: [DashboardRightComponent, OnLeaveModalComponent, AbsentTodayComponent, WorkAnniversaryComponent],
  imports: [CommonModule, DashboardRoutingModule, NgChartsModule],
  exports: [DashboardRightComponent],
})
export class DashboardModule {}
