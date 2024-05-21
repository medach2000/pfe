import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateAdminOrganizationRoutingModule } from './create-admin-organization-routing.module';
import { CreateAdminOrgComponent } from './create-admin-org/create-admin-org.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateAdminOrgComponent
  ],
  imports: [
    CommonModule,
    CreateAdminOrganizationRoutingModule,
    FormsModule
  ]
})
export class CreateAdminOrganizationModule { }
