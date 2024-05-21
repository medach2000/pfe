import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddabonnementRoutingModule } from './addabonnement-routing.module';
import { AddabonnementComponent } from './addabonnement/addabonnement.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddabonnementComponent
  ],
  imports: [
    CommonModule,
    AddabonnementRoutingModule,
    FormsModule
  ]
})
export class AddabonnementModule { }
