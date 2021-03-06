import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ReposComponent } from './Components/repos/repos.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'repos',
    component:ReposComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class DashboardRoutingModule { }
