import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './Features/not-found/not-found.component';
import { APP_ROUTES_PARAMS } from './Models/Constants';


const routes: Routes = [
  {
    path: 'samu',
    loadChildren: () => import('./Features/samu/samu.module').then(m => m.SamuModule),
    pathMatch: 'full',
    data: { title: "État des lits en France" },
  },
  {
    path: `referent/:${APP_ROUTES_PARAMS.URL_KEY}`,
    loadChildren: () => import('./Features/referent/referent.module').then(m => m.ReferentModule),
    pathMatch: 'full',
    data: { title: "Gestion des lits" }
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
