import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminorganizationRoutingModule } from './adminorganization-routing.module';
import { AdminorgComponent } from './adminorg/adminorg.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminorgComponent
  ],
  imports: [
    CommonModule,
    AdminorganizationRoutingModule,
    FormsModule
  ]
})
export class AdminorganizationModule { }
