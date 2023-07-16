import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThirdRoutingModule } from './third-routing.module';
import { ThirdHomeComponent } from './third-home/third-home.component';

@NgModule({
  declarations: [ThirdHomeComponent],
  imports: [CommonModule, ThirdRoutingModule],

})
export class ThirdModule {}
