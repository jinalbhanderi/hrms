import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedbackRoutingModule } from './feedback-routing.module';
import { PraiseSettingsComponent } from './praise-settings/praise-settings.component';
import { CoreValueComponent } from './core-value/core-value.component';
import { FeedbackTypeComponent } from './feedback-type/feedback-type.component';
import { AddBadgeComponent } from './praise-settings/add-badge/add-badge.component';
import { AddCoreValueComponent } from './core-value/add-core-value/add-core-value.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AddFeedbackComponent } from './feedback-type/add-feedback/add-feedback.component';


@NgModule({
  declarations: [
    PraiseSettingsComponent,
    CoreValueComponent,
    FeedbackTypeComponent,
    AddBadgeComponent,
    AddCoreValueComponent,
    AddFeedbackComponent
  ],
  imports: [
    CommonModule,
    FeedbackRoutingModule,
    MatDialogModule
  ]
})
export class FeedbackModule { }
