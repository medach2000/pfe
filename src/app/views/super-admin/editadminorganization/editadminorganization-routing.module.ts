import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditadminorgComponent } from './editadminorg/editadminorg.component';

const routes: Routes = [
  {path:'', component: EditadminorgComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditadminorganizationRoutingModule { }
