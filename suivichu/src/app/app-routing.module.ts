import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisponibilityComponent } from './Features/disponibility/disponibility.component';
import { ReferentComponent } from './Features/referent/referent.component';
import { NotFoundComponent } from './Features/not-found/not-found.component';


const routes: Routes = [
  { path: 'disponibility', component: DisponibilityComponent },
  { path: 'referent',      component: ReferentComponent },
  {
    path: 'referent',
    component: ReferentComponent
  },
  { path: '',
    redirectTo: '/disponibility',
    pathMatch: 'full'
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
