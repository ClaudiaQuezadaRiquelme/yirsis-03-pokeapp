import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid/grid.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [
    GridComponent,
    NavbarComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatGridListModule,
  ],
  exports: [
    GridComponent
  ]
})
export class PokeModule { }