import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyCompOffRoutingModule } from './my-comp-off-routing.module';
import { AddComponent } from './add/add.component';


@NgModule({
  declarations: [
    AddComponent
  ],
  imports: [
    CommonModule,
    MyCompOffRoutingModule
  ]
})
export class MyCompOffModule { }
