import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpDeskRoutingModule } from './help-desk-routing.module';
import { MyTicketComponent } from './my-ticket/my-ticket.component';
import { AssignTicketsComponent } from './assign-tickets/assign-tickets.component';
import { FollowerTicketsComponent } from './follower-tickets/follower-tickets.component';
import { AllTicketsComponent } from './all-tickets/all-tickets.component';
import { HelpDashboardComponent } from './help-dashboard/help-dashboard.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { AddTicketComponent } from './add-ticket/add-ticket.component';


@NgModule({
  declarations: [
    MyTicketComponent,
    AssignTicketsComponent,
    FollowerTicketsComponent,
    AllTicketsComponent,
    HelpDashboardComponent,
    AddTicketComponent,
  ],
  imports: [
    CommonModule,
    HelpDeskRoutingModule,
    NgSelectModule
  ]
})
export class HelpDeskModule { }
