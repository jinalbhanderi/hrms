import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImportLeaveComponent } from './import-leave/import-leave.component';
import { ImportLeavePolicyComponent } from './import-leave-policy/import-leave-policy.component';

const routes: Routes = [
  {path:'import-leave' ,component:ImportLeaveComponent},
  {path:'import-leave-policy' ,component:ImportLeavePolicyComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaveRoutingModule { }
