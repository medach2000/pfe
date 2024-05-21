import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserOrgDashboardComponent } from './user-org-dashboard/user-org-dashboard.component';

const routes: Routes = [
  {path:'', component:UserOrgDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserOrgDashboardRoutingModule { }
