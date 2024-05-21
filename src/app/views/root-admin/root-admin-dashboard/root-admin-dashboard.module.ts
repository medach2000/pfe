import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootAdminDashboardRoutingModule } from './root-admin-dashboard-routing.module';
import { RootAdminDashboardComponent } from './root-admin-dashboard/root-admin-dashboard.component';


@NgModule({
  declarations: [
    RootAdminDashboardComponent
  ],
  imports: [
    CommonModule,
    RootAdminDashboardRoutingModule
  ]
})
export class RootAdminDashboardModule { }
