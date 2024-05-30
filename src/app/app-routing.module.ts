import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '',redirectTo: '/login',pathMatch: 'full'},
  {path:'',loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)},
  {path:'', loadChildren: () => import('../app/layout/layout.module').then(m => m.LayoutModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
