import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddorganizationComponent } from './addorganization/addorganization.component';

const routes: Routes = [
  {path: '', component:AddorganizationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddorganizationRoutingModule { }
