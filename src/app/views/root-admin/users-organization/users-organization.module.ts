import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersOrganizationRoutingModule } from './users-organization-routing.module';
import { UsersOrganizationComponent } from './users-organization/users-organization.component';


@NgModule({
  declarations: [
    UsersOrganizationComponent
  ],
  imports: [
    CommonModule,
    UsersOrganizationRoutingModule
  ]
})
export class UsersOrganizationModule { }
