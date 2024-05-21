import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootAdminDashboardComponent } from './root-admin-dashboard/root-admin-dashboard.component';

const routes: Routes = [
  {path: '', component: RootAdminDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RootAdminDashboardRoutingModule { }
