import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SamuComponent } from './Features/samu/samu.component';
import { ReferentComponent } from './Features/referent/referent.component';
import { NotFoundComponent } from './Features/not-found/not-found.component';


const routes: Routes = [
  {
    path: 'samu',
    component: SamuComponent,
    pathMatch: 'full',
    data: { title: "Etat des lits" }
  },
  {
    path: 'referent',
    component: ReferentComponent,
    pathMatch: 'full',
    data: { title: "Gestion des lits" }
  },
  {
    path: '**',
    component: NotFoundComponent,
    data: { title: "Page non trouvée" }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
