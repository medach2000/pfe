import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaunchNewContainerRoutingModule } from './launch-new-container-routing.module';
import { LaunchNewContainerComponent } from './launch-new-container/launch-new-container.component';


@NgModule({
  declarations: [
    LaunchNewContainerComponent
  ],
  imports: [
    CommonModule,
    LaunchNewContainerRoutingModule
  ]
})
export class LaunchNewContainerModule { }
