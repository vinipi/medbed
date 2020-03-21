import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SamuComponent } from './Features/samu/samu.component';
import { ReferentComponent } from './Features/referent/referent.component';
import { NotFoundComponent } from './Features/not-found/not-found.component';


const routes: Routes = [
  { path: 'samu', component: SamuComponent },
  { path: 'referent', component: ReferentComponent },
  {
    path: 'referent',
    component: ReferentComponent
  },
  {
    path: '',
    redirectTo: '/samu',
    pathMatch: 'full'
  },
  { path: '**', component: NotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
