import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperAdminComponent } from './super-admin/super-admin.component';
import { RootAdminComponent } from './root-admin/root-admin.component';
import { UserOrgComponent } from './user-org/user-org.component';
import { RouterModule } from '@angular/router';
import { AuthSuperAdminComponent } from './auth-super-admin/auth-super-admin.component';
import { AuthRootAdminComponent } from './auth-root-admin/auth-root-admin.component';
import { AuthUserOrgComponent } from './auth-user-org/auth-user-org.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    SuperAdminComponent,
    RootAdminComponent,
    UserOrgComponent,
    AuthSuperAdminComponent,
    AuthRootAdminComponent,
    AuthUserOrgComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutsModule { }
