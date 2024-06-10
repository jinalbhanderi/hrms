import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyTicketComponent } from './my-ticket/my-ticket.component';
import { AssignTicketsComponent } from './assign-tickets/assign-tickets.component';
import { FollowerTicketsComponent } from './follower-tickets/follower-tickets.component';
import { AllTicketsComponent } from './all-tickets/all-tickets.component';
import { HelpDashboardComponent } from './help-dashboard/help-dashboard.component';
import { AddTicketComponent } from './add-ticket/add-ticket.component';

const routes: Routes = [
  {path:'my-tickets',component:MyTicketComponent},
  {path:'assign-tickets',component:AssignTicketsComponent},
  {path:'follower-tickets',component:FollowerTicketsComponent},
  {path:'helpdesk/dashboard',component:HelpDashboardComponent},
  {path:'all-tickets',component:AllTicketsComponent},
  {path:'add-tickets',component:AddTicketComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpDeskRoutingModule { }
