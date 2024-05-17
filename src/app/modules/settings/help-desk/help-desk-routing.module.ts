import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './category-list/category-list.component';
import { StatusListComponent } from './status-list/status-list.component';
import { ActivityComponent } from './activity/activity.component';
import { AdvanceSettingsComponent } from './advance-settings/advance-settings.component';

const routes: Routes = [
  { path: 'category-list', component: CategoryListComponent },
  { path: 'status-list', component: StatusListComponent },
  { path: 'activity', component: ActivityComponent },
  { path: 'advance-settings', component: AdvanceSettingsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelpDeskRoutingModule {}
