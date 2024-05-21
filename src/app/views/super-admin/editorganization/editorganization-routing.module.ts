import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorganizationComponent } from './editorganization/editorganization.component';

const routes: Routes = [
  {path:'', component:EditorganizationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditorganizationRoutingModule { }
