import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';

const routes: Routes = [
  { path: '', component: PublicComponent },
  { path: 'home', loadChildren: () => import('../../modules/public/home/home.module').then(m => m.HomeModule) },
  { path: 'aboutus', loadChildren: () => import('../../modules/public/aboutus/aboutus.module').then(m => m.AboutusModule) },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
