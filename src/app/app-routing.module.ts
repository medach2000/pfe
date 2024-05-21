import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuperAdminComponent } from './layouts/super-admin/super-admin.component';
import { RootAdminComponent } from './layouts/root-admin/root-admin.component';
import { UserOrgComponent } from './layouts/user-org/user-org.component';
import { AuthSuperAdminComponent } from './layouts/auth-super-admin/auth-super-admin.component';
import { AuthRootAdminComponent } from './layouts/auth-root-admin/auth-root-admin.component';
import { AuthUserOrgComponent } from './layouts/auth-user-org/auth-user-org.component';
import { HomeComponent } from './layouts/home/home.component';

const routes: Routes = [
  {path: 'super-admin', component:SuperAdminComponent, children:[
    {path: '', loadChildren:()=>import('./views/super-admin/dashboard/dashboard.module').then(m => m.DashboardModule)},
    {path: 'dashboard', loadChildren:()=>import('./views/super-admin/dashboard/dashboard.module').then(m => m.DashboardModule)},
    {path: 'organizations', loadChildren:()=>import('./views/super-admin/organizations/organizations.module').then(m=>m.OrganizationsModule)},
    {path: 'addorganization', loadChildren:()=>import('./views/super-admin/addorganization/addorganization.module').then(m=>m.AddorganizationModule)},
    {path: 'editorganization/:id', loadChildren:()=>import('./views/super-admin/editorganization/editorganization.module').then(m=>m.EditorganizationModule)},
    {path: 'adminorg', loadChildren:()=>import('./views/super-admin/adminorganization/adminorganization.module').then(m=>m.AdminorganizationModule)},
    {path: 'createadminorg', loadChildren:()=>import('./views/super-admin/create-admin-organization/create-admin-organization.module').then(m=>m.CreateAdminOrganizationModule)},
    {path: 'editadminorganization/:id', loadChildren:()=>import('./views/super-admin/editadminorganization/editadminorganization.module').then(m=>m.EditadminorganizationModule)},
    {path: 'subscription', loadChildren:()=>import('./views/super-admin/abonnement/abonnement.module').then(m=>m.AbonnementModule)},
    {path: 'addsubscription', loadChildren:()=>import('./views/super-admin/addabonnement/addabonnement.module').then(m=>m.AddabonnementModule)},
    {path: 'editsubscription/:id', loadChildren:()=>import('./views/super-admin/editabonnement/editabonnement.module').then(m=>m.EditabonnementModule)}
  ]},
  {path:'super-admin/login', component:AuthSuperAdminComponent},
  {path: 'root-admin', component:RootAdminComponent, children:[
    {path: '', loadChildren:()=>import('./views/root-admin/root-admin-dashboard/root-admin-dashboard.module').then(m=>m.RootAdminDashboardModule)},
    {path: 'root-admin-dashboard', loadChildren:()=>import('./views/root-admin/root-admin-dashboard/root-admin-dashboard.module').then(m=>m.RootAdminDashboardModule)},
    {path: 'users-organization', loadChildren:()=>import('./views/root-admin/users-organization/users-organization.module').then(m=>m.UsersOrganizationModule)},
    {path: 'createuserorg', loadChildren:()=>import('./views/root-admin/create-user-org/create-user-org.module').then(m=>m.CreateUserOrgModule)} 
  ]},
  {path:'root-admin/login', component:AuthRootAdminComponent},
  {path: 'user-org', component:UserOrgComponent, children:[
    {path:'', loadChildren:()=>import('./views/user-org/user-org-dashboard/user-org-dashboard.module').then(m=>m.UserOrgDashboardModule)},
    {path:'user-org-dashboard', loadChildren:()=>import('./views/user-org/user-org-dashboard/user-org-dashboard.module').then(m=>m.UserOrgDashboardModule)},
    {path:'containers', loadChildren:()=>import('./views/user-org/containers/containers.module').then(m=>m.ContainersModule)},
    {path:'launch-new-container', loadChildren:()=>import('./views/user-org/launch-new-container/launch-new-container.module').then(m=>m.LaunchNewContainerModule)}
  ]},
  {path:'user-org/login', component:AuthUserOrgComponent},
  {path:'', component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
