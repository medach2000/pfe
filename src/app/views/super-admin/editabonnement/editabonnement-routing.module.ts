import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditabonnementComponent } from './editabonnement/editabonnement.component';

const routes: Routes = [
  {path:'', component:EditabonnementComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditabonnementRoutingModule { }
