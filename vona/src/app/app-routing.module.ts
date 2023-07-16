import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainModule } from './main/main.module';
import { CompaniesComponent } from './companies/companies.component';
import { IletisimComponent } from './iletisim/iletisim.component';

const routes: Routes = [
  {
    path: 'mainhome',
    loadChildren: () => import('./main/main.module').then((a) => a.MainModule),
  },
  {
    path: 'firsthome',
    loadChildren: () =>
      import('./first/first.module').then((a) => a.FirstModule),
  },
  {
    path: 'secondhome',
    loadChildren: () =>
      import('./second/second.module').then((a) => a.SecondModule),
  },
  {
    path: 'hakkımızda',
    loadChildren: () =>
      import('./third/third.module').then((a) => a.ThirdModule),
  },
  { path: 'kampanyalarımız', component: CompaniesComponent },
  { path: 'iletisim', component: IletisimComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
