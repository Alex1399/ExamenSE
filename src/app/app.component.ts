import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Acceder', url: '/ingreso', icon: 'enter' },
    { title: 'Formulario', url: '/privado', icon: 'reader' },    
  ];
  
  constructor() {}
}