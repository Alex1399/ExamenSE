import { Component } from '@angular/core';


@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.page.html',
  styleUrls: ['./ingreso.page.scss'],
})
export class IngresoPage {
  pregunta1!: string;
  pregunta2: string | undefined;
  pregunta3: string | undefined;
  pregunta4: string | undefined;
  pregunta5: string | undefined;
  pregunta6: string | undefined;
  pregunta7: string | undefined;

  enviarRespuestas() {
    // Aquí puedes enviar las respuestas almacenadas en cada variable
    console.log('Respuesta 1: ', this.pregunta1);
    console.log('Respuesta 2: ', this.pregunta2);
    console.log('Respuesta 3: ', this.pregunta3);
    console.log('Respuesta 4: ', this.pregunta4);
    console.log('Respuesta 5: ', this.pregunta5);
    console.log('Respuesta 6: ', this.pregunta6);
    console.log('Respuesta 7: ', this.pregunta7);
  }
}