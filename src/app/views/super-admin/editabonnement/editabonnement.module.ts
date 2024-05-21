import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditabonnementRoutingModule } from './editabonnement-routing.module';
import { EditabonnementComponent } from './editabonnement/editabonnement.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditabonnementComponent
  ],
  imports: [
    CommonModule,
    EditabonnementRoutingModule,
    FormsModule
  ]
})
export class EditabonnementModule { }
