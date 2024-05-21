import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddabonnementComponent } from './addabonnement/addabonnement.component';

const routes: Routes = [
  {path: '', component:AddabonnementComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddabonnementRoutingModule { }
