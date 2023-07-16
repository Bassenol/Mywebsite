import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondRoutingModule } from './second-routing.module';
import { SecondHomeComponent } from './second-home/second-home.component';
import { CiltbakimComponent } from './ciltbakim/ciltbakim.component';
import { ManikurComponent } from './manikur/manikur.component';
import { MakyajComponent } from './makyaj/makyaj.component';
import { KasdizaynComponent } from './kasdizayn/kasdizayn.component';
import { KirpikComponent } from './kirpik/kirpik.component';
import { OjeComponent } from './oje/oje.component';

@NgModule({
  declarations: [SecondHomeComponent, CiltbakimComponent, ManikurComponent, MakyajComponent, KasdizaynComponent, KirpikComponent, OjeComponent],
  imports: [CommonModule, SecondRoutingModule],

})
export class SecondModule {}
