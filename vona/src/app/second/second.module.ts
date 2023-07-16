import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondRoutingModule } from './second-routing.module';
import { SecondHomeComponent } from './second-home/second-home.component';

@NgModule({
  declarations: [SecondHomeComponent],
  imports: [CommonModule, SecondRoutingModule],

})
export class SecondModule {}
