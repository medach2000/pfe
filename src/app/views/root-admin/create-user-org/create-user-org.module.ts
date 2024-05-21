import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateUserOrgRoutingModule } from './create-user-org-routing.module';
import { CreateUserOrgComponent } from './create-user-org/create-user-org.component';


@NgModule({
  declarations: [
    CreateUserOrgComponent
  ],
  imports: [
    CommonModule,
    CreateUserOrgRoutingModule
  ]
})
export class CreateUserOrgModule { }
