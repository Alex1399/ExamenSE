import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  // Agrega estas líneas




import { PrivadoPageRoutingModule } from './privado-routing.module';

import { PrivadoPage } from './privado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormsModule,  // Agrega esta línea
    ReactiveFormsModule,  // Agrega esta línea
    PrivadoPageRoutingModule,
  ],
  declarations: [PrivadoPage],
})
export class PrivadoPageModule {}
