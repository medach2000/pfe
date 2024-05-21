import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserOrgDashboardRoutingModule } from './user-org-dashboard-routing.module';
import { UserOrgDashboardComponent } from './user-org-dashboard/user-org-dashboard.component';


@NgModule({
  declarations: [
    UserOrgDashboardComponent
  ],
  imports: [
    CommonModule,
    UserOrgDashboardRoutingModule
  ]
})
export class UserOrgDashboardModule { }
