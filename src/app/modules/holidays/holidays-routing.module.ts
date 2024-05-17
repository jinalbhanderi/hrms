import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyHolidaysComponent } from './my-holidays/my-holidays.component';

const routes: Routes = [
  {path:'holidays',component:MyHolidaysComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HolidaysRoutingModule { }
