import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferentRoutingModule } from './referent-routing.module';
import { ReferentComponent } from './referent.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ReferentComponent],
  imports: [
    CommonModule,
    ReferentRoutingModule,
    FormsModule
  ]
})
export class ReferentModule { }
