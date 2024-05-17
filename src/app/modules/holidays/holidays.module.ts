import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HolidaysRoutingModule } from './holidays-routing.module';
import { MyHolidaysComponent } from './my-holidays/my-holidays.component';


@NgModule({
  declarations: [
    MyHolidaysComponent
  ],
  imports: [
    CommonModule,
    HolidaysRoutingModule
  ]
})
export class HolidaysModule { }
