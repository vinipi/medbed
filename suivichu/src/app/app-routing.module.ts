import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SamuComponent } from './Features/samu/samu.component';
import { ReferentComponent } from './Features/referent/referent.component';
import { NotFoundComponent } from './Features/not-found/not-found.component';
import { APP_ROUTES_PARAMS } from './Models/Constants';


const routes: Routes = [
  {
    path: 'samu',
    component: SamuComponent,
    pathMatch: 'full',
    data: { title: "État des lits en France" },
  },
  {
    path: `referent/:${APP_ROUTES_PARAMS.URL_KEY}`,
    component: ReferentComponent,
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
