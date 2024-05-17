import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaxRegimeComponent } from './tax-regime/tax-regime.component';
import { SalaryTemplateComponent } from './salary-template/salary-template.component';

const routes: Routes = [
  { path: 'tax-regime', component: TaxRegimeComponent },
  { path: 'salary-template', component: SalaryTemplateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyFinanceRoutingModule {}
