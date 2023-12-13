import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrivadoPage } from './privado.page';
import { InicioPage } from '../inicio/inicio.page';
const routes: Routes = [
  {
    path: '',
    component: PrivadoPage
  },
  {
    path: 'inicio',
    component: InicioPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivadoPageRoutingModule {}
