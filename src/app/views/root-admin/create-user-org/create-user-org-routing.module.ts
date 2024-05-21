import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserOrgComponent } from './create-user-org/create-user-org.component';

const routes: Routes = [
  {path:'', component:CreateUserOrgComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateUserOrgRoutingModule { }
