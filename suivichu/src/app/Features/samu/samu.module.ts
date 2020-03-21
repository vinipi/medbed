import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SamuRoutingModule } from './samu-routing.module';
import { SamuComponent } from './samu.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [SamuComponent],
  imports: [
    CommonModule,
    SamuRoutingModule,
    FormsModule
  ]
})
export class SamuModule { }
