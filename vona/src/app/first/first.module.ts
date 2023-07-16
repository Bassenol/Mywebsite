import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstRoutingModule } from './first-routing.module';
import { FirstHomeComponent } from './first-home/first-home.component';


@NgModule({
  declarations: [
    FirstHomeComponent
  ],
  imports: [
    CommonModule,
    FirstRoutingModule
  ],

})
export class FirstModule { }
