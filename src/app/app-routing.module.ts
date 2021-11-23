import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/dashboard/Components/home/home.component';
import { ReposComponent } from './modules/dashboard/Components/repos/repos.component';



const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then((m) => m.DashboardModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
