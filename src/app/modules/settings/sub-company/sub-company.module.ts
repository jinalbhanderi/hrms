import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubCompanyRoutingModule } from './sub-company-routing.module';
import { AddComponent } from './add/add.component';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    AddComponent
  ],
  imports: [
    CommonModule,
    SubCompanyRoutingModule,
    NgSelectModule
  ],
  exports:[AddComponent]
})
export class SubCompanyModule { }
