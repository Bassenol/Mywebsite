import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondHomeComponent } from './second-home/second-home.component';

const routes: Routes = [
  {path:'',component:SecondHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondRoutingModule { }
