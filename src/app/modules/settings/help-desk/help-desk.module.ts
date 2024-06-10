import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpDeskRoutingModule } from './help-desk-routing.module';
import { CategoryListComponent } from './category-list/category-list.component';
import { StatusListComponent } from './status-list/status-list.component';
import { ActivityComponent } from './activity/activity.component';
import { AdvanceSettingsComponent } from './advance-settings/advance-settings.component';
import { AddCategoryComponent } from './category-list/add-category/add-category.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AddStatusComponent } from './status-list/add-status/add-status.component';
import { AddActivityStatusComponent } from './activity/add-activity-status/add-activity-status.component';


@NgModule({
  declarations: [
    CategoryListComponent,
    StatusListComponent,
    ActivityComponent,
    AdvanceSettingsComponent,
    AddCategoryComponent,
    AddStatusComponent,
    AddActivityStatusComponent
  ],
  imports: [
    CommonModule,
    HelpDeskRoutingModule,
    MatDialogModule
  ]
})
export class HelpDeskModule { }
