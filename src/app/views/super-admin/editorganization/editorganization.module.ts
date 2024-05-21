import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorganizationRoutingModule } from './editorganization-routing.module';
import { EditorganizationComponent } from './editorganization/editorganization.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditorganizationComponent
  ],
  imports: [
    CommonModule,
    EditorganizationRoutingModule,
    FormsModule
  ]
})
export class EditorganizationModule { }
