import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditadminorganizationRoutingModule } from './editadminorganization-routing.module';
import { EditadminorgComponent } from './editadminorg/editadminorg.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditadminorgComponent
  ],
  imports: [
    CommonModule,
    EditadminorganizationRoutingModule,
    FormsModule
  ]
})
export class EditadminorganizationModule { }
