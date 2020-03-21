import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferentRoutingModule } from './referent-routing.module';
import { ReferentComponent } from './referent.component';


@NgModule({
  declarations: [ReferentComponent],
  imports: [
    CommonModule,
    ReferentRoutingModule
  ]
})
export class ReferentModule { }
