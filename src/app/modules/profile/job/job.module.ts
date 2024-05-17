import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobRoutingModule } from './job-routing.module';
import { InfoComponent } from './info/info.component';
import { AgreementInfoComponent } from './agreement-info/agreement-info.component';
import { CompensationComponent } from './compensation/compensation.component';
import { ResignationComponent } from './resignation/resignation.component';
import { HistoryComponent } from './history/history.component';
import { ProbationComponent } from './probation/probation.component';


@NgModule({
  declarations: [
    InfoComponent,
    AgreementInfoComponent,
    CompensationComponent,
    ResignationComponent,
    HistoryComponent,
    ProbationComponent
  ],
  imports: [
    CommonModule,
    JobRoutingModule
  ]
})
export class JobModule { }
