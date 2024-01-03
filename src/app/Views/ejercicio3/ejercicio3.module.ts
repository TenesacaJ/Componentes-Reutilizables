import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ejercicio3PageRoutingModule } from './ejercicio3-routing.module';

import { Ejercicio3Page } from './ejercicio3.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { ColorListComponent } from 'src/app/Componentes/color-list/color-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ejercicio3PageRoutingModule, 
    SharedModule
  ],
  declarations: [Ejercicio3Page, ColorListComponent]
})
export class Ejercicio3PageModule {}
