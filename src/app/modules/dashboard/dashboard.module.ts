import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardRightComponent } from './dashboard-right/dashboard-right.component';


@NgModule({
  declarations: [
    DashboardRightComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
  ],
  exports:[DashboardRightComponent]
})
export class DashboardModule { }
