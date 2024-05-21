import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaunchNewContainerComponent } from './launch-new-container/launch-new-container.component';

const routes: Routes = [
  {path:'', component:LaunchNewContainerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaunchNewContainerRoutingModule { }
