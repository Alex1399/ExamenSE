import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Registrarse', url: '/registrarse', icon: 'enter' },
    { title: 'Inicio', url: '/ingreso', icon: 'people' },
    { title: 'Formulario', url: '/privado', icon: 'people' },
    { title: 'INICIO', url: '/inicio', icon: 'people' },
  ];
  
  constructor() {}
}