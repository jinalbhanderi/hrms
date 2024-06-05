import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackComponent } from './feedback.component';
import { PraiseComponent } from './praise/praise.component';
import { FeedbackReceivedComponent } from './feedback-received/feedback-received.component';
import { FeedbackRequestsComponent } from './feedback-requests/feedback-requests.component';

const routes: Routes = [
  {
    path: '',
    component: FeedbackComponent,
    children: [
      { path: '', redirectTo: 'praise', pathMatch: 'full' },
      { path: 'praise', component: PraiseComponent },
      { path: 'feedback-received', component: FeedbackReceivedComponent },
      { path: 'feedback-requests', component: FeedbackRequestsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeedbackRoutingModule {}
