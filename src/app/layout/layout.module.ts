import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { UserInfoModelComponent } from './sidebar/user-info-model/user-info-model.component';


@NgModule({
  declarations: [
    UserInfoModelComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  exports:[UserInfoModelComponent]
})
export class LayoutModule { }
