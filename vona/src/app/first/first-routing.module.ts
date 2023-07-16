import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstHomeComponent } from './first-home/first-home.component';

const routes: Routes = [{
  path:'',component:FirstHomeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstRoutingModule { }
