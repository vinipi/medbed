import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SamuComponent } from './samu.component';

const routes: Routes = [{ path: '', component: SamuComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SamuRoutingModule { }
