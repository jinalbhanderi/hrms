import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedbackRoutingModule } from './feedback-routing.module';
import { PraiseSettingsComponent } from './praise-settings/praise-settings.component';
import { CoreValueComponent } from './core-value/core-value.component';
import { FeedbackTypeComponent } from './feedback-type/feedback-type.component';


@NgModule({
  declarations: [
    PraiseSettingsComponent,
    CoreValueComponent,
    FeedbackTypeComponent
  ],
  imports: [
    CommonModule,
    FeedbackRoutingModule
  ]
})
export class FeedbackModule { }
