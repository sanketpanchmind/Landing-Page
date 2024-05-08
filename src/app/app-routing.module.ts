import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './layouts/public/public.component';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'ref', component: ReferanceComponent },// For Testing purpose
  // { path: '', component: PublicComponent, loadChildren: () => import('./layouts/public/public.module').then(m => m.PublicModule) },



  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: PublicComponent, loadChildren: () => import('./layouts/public/public.module').then(m => m.PublicModule) },
  { path: 'home', loadChildren: () => import('./modules/public/home/home.module').then(m => m.HomeModule) },
  { path: 'aboutus', loadChildren: () => import('./modules/public/aboutus/aboutus.module').then(m => m.AboutusModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
