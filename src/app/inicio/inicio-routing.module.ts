import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioPage } from './inicio.page';
import { IngresoPage } from '../ingreso/ingreso.page';
const routes: Routes = [
  {
    path: '',
    component: InicioPage
  }, 
  {
    path: 'privado',
    component: IngresoPage, // Agrega la ruta para la página "privado"
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioPageRoutingModule {}
