import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PraiseSettingsComponent } from './praise-settings/praise-settings.component';
import { CoreValueComponent } from './core-value/core-value.component';
import { FeedbackTypeComponent } from './feedback-type/feedback-type.component';

const routes: Routes = [
  {path:'praise-settings',component:PraiseSettingsComponent},
  {path:'core-value',component:CoreValueComponent},
  {path:'feedback-type',component:FeedbackTypeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedbackRoutingModule { }
