import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminorgComponent } from './adminorg/adminorg.component';

const routes: Routes = [
  {path:'', component:AdminorgComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminorganizationRoutingModule { }
