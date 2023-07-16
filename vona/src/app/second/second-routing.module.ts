import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondHomeComponent } from './second-home/second-home.component';
import { CiltbakimComponent } from './ciltbakim/ciltbakim.component';
import { ManikurComponent } from './manikur/manikur.component';
import { KasdizaynComponent } from './kasdizayn/kasdizayn.component';
import { KirpikComponent } from './kirpik/kirpik.component';
import { OjeComponent } from './oje/oje.component';
import { MakyajComponent } from './makyaj/makyaj.component';

const routes: Routes = [
  {
    path: '',
    component: SecondHomeComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'ciltbakim' },
      { path: 'ciltbakim', component: CiltbakimComponent },
      { path: 'manikur', component: ManikurComponent },
      { path: 'makyaj', component: MakyajComponent },
      { path: 'kasdizayn', component: KasdizaynComponent },
      { path: 'ipekkirpik', component: KirpikComponent },
      { path: 'kalicioje', component: OjeComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecondRoutingModule {}
