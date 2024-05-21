import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAdminOrgComponent } from './create-admin-org/create-admin-org.component';

const routes: Routes = [
  {path:'', component:CreateAdminOrgComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateAdminOrganizationRoutingModule { }
