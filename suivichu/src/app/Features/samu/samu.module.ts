import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SamuRoutingModule } from './samu-routing.module';
import { SamuComponent } from './samu.component';


@NgModule({
  declarations: [SamuComponent],
  imports: [
    CommonModule,
    SamuRoutingModule
  ]
})
export class SamuModule { }
