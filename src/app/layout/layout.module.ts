import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { UserInfoModelComponent } from './sidebar/user-info-model/user-info-model.component';
import { YourTimingComponent } from './header/your-timing/your-timing.component';

@NgModule({
  declarations: [UserInfoModelComponent, YourTimingComponent],
  imports: [CommonModule, LayoutRoutingModule],
  exports: [UserInfoModelComponent, YourTimingComponent],
})
export class LayoutModule {}
