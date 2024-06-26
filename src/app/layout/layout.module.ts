import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { UserInfoModelComponent } from './sidebar/user-info-model/user-info-model.component';
import { YourTimingComponent } from './header/your-timing/your-timing.component';
import { FormsModule } from '@angular/forms';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [UserInfoModelComponent, YourTimingComponent],
  imports: [CommonModule, LayoutRoutingModule, FormsModule, NgbDropdown,NgSelectModule],
  exports: [UserInfoModelComponent, YourTimingComponent],
})
export class LayoutModule {}
