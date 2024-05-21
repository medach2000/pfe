import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersOrganizationComponent } from './users-organization/users-organization.component';

const routes: Routes = [
  {path: '', component: UsersOrganizationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersOrganizationRoutingModule { }
