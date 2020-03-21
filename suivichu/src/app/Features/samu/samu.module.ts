import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SamuRoutingModule } from './samu-routing.module';
import { SamuComponent } from './samu.component';

import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [SamuComponent],
  imports: [
    FormsModule,
    CommonModule,
    SamuRoutingModule,
    MatRadioModule,
    MatCheckboxModule,
    MatButtonModule,
  ]
})
export class SamuModule { }
