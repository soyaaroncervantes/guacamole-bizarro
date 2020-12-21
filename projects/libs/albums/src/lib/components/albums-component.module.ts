import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { CardComponent } from './card/card.component';
import { RollingSvgComponentComponent } from './svg/rolling/rolling-svg-component.component';


@NgModule({
  declarations: [
    CardComponent,
    RollingSvgComponentComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
  ],
  exports: [
    CardComponent,
    RollingSvgComponentComponent
  ]
})
export class AlbumsComponentModule { }
