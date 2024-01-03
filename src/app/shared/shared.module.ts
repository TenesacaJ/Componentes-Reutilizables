import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../Componentes/nav-bar/nav-bar.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [NavBarComponent],
  imports: [
    CommonModule,
    IonicModule.forRoot()
  ],
  exports: [NavBarComponent]
})
export class SharedModule { }
