import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpDeskRoutingModule } from './help-desk-routing.module';
import { CategoryListComponent } from './category-list/category-list.component';
import { StatusListComponent } from './status-list/status-list.component';
import { ActivityComponent } from './activity/activity.component';
import { AdvanceSettingsComponent } from './advance-settings/advance-settings.component';


@NgModule({
  declarations: [
    CategoryListComponent,
    StatusListComponent,
    ActivityComponent,
    AdvanceSettingsComponent
  ],
  imports: [
    CommonModule,
    HelpDeskRoutingModule
  ]
})
export class HelpDeskModule { }
