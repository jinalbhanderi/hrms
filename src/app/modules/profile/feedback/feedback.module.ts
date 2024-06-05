import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedbackRoutingModule } from './feedback-routing.module';
import { PraiseComponent } from './praise/praise.component';
import { FeedbackReceivedComponent } from './feedback-received/feedback-received.component';
import { FeedbackRequestsComponent } from './feedback-requests/feedback-requests.component';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    PraiseComponent,
    FeedbackReceivedComponent,
    FeedbackRequestsComponent
  ],
  imports: [
    CommonModule,
    FeedbackRoutingModule,
    NgSelectModule
  ]
})
export class FeedbackModule { }
