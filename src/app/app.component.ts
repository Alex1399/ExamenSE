import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'INICIO', url: '/inicio', icon: 'people' },
    { title: 'Acceder', url: '/ingreso', icon: 'people' },
    { title: 'Formulario', url: '/privado', icon: 'people' },
    { title: 'Regis', url: '/registrarse', icon: 'enter' },
    
    
    
  ];
  
  constructor() {}
}