import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReferentComponent } from './referent.component';

const routes: Routes = [{ path: '', component: ReferentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferentRoutingModule { }
