import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobRoutingModule } from './job-routing.module';
import { InfoComponent } from './info/info.component';
import { AgreementInfoComponent } from './agreement-info/agreement-info.component';
import { CompensationComponent } from './compensation/compensation.component';
import { ResignationComponent } from './resignation/resignation.component';
import { HistoryComponent } from './history/history.component';
import { ProbationComponent } from './probation/probation.component';
import { AddJobInformationComponent } from './info/add-job-information/add-job-information.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { AddAgreementComponent } from './agreement-info/add-agreement/add-agreement.component';
import { AddCompensationComponent } from './compensation/add-compensation/add-compensation.component';
import { AddEmployeeExitComponent } from './resignation/add-employee-exit/add-employee-exit.component';
import { ActivityLogsComponent } from './probation/activity-logs/activity-logs.component';
import { ProbationStatusComponent } from './probation/probation-status/probation-status.component';
import { EditJobInformationComponent } from './info/edit-job-information/edit-job-information.component';
import { ViewSalaryComponent } from './compensation/view-salary/view-salary.component';
import { ViewSalaryDataComponent } from './compensation/view-salary-data/view-salary-data.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InfoComponent,
    AgreementInfoComponent,
    CompensationComponent,
    ResignationComponent,
    HistoryComponent,
    ProbationComponent,
    AddJobInformationComponent,
    AddAgreementComponent,
    AddCompensationComponent,
    AddEmployeeExitComponent,
    ActivityLogsComponent,
    ProbationStatusComponent,
    EditJobInformationComponent,
    ViewSalaryComponent,
    ViewSalaryDataComponent,
  ],
  imports: [
    CommonModule,
    JobRoutingModule,
    // BrowserAnimationsModule,
    MatDialogModule,
    NgSelectModule,
    FormsModule
  ],
})
export class JobModule {}
