import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import banco from 'src/assets/banco/analisis.json';

interface Pregunta {
  id: string;
  nombre: string;
  balones?: { [key: string]: { balon: string; mesa?: string[] } };
  arrayBalones?: { balon: string; mesa?: string[] }[];
}

@Component({
  selector: 'app-privado',
  templateUrl: './privado.page.html',
  styleUrls: ['./privado.page.scss'],
})
export class PrivadoPage implements OnInit {
  public analisis: any = banco;
  public arrayPregunta: Pregunta[] = [];
  public preguntaSeleccionadaId: string = '';
  public pregunta: Pregunta = { id: '', nombre: '' }; // Inicializado con valores por defecto
  public opcionMesa: string = '';

  constructor(private alertController: AlertController) { } // Inyecta AlertController

  ngOnInit() {
    this.cargarPreguntas();
  }

  cargarPreguntas() {
    for (const preguntaId in this.analisis) {
      if (this.analisis.hasOwnProperty(preguntaId)) {
        const pregunta: Pregunta = {
          id: preguntaId,
          nombre: this.analisis[preguntaId].pregunta,
          balones: this.analisis[preguntaId].balones,
        };
        this.arrayPregunta.push(pregunta);

        // No es necesario Object.values si balones es un array
        pregunta.arrayBalones = pregunta.balones ? Object.values(pregunta.balones) : [];
      }
    }

    console.log(this.arrayPregunta);
  }

  onPreguntaChange() {
    // Buscar la pregunta seleccionada en arrayPregunta por el id
    this.pregunta = this.arrayPregunta.find(item => item.id === this.preguntaSeleccionadaId) || { id: '', nombre: '' };
    
    // Limpiar arrayBalones al cambiar la pregunta
    this.pregunta.arrayBalones = this.pregunta.arrayBalones || [];
    
    // Rellenar arrayBalones con los balones de la pregunta seleccionada
    if (this.pregunta.balones) {
    this.pregunta.arrayBalones = Object.values(this.pregunta.balones);
    }
    
    // Limpiar la selección de opciones de mesa
    this.opcionMesa = '';
    
    console.log('Pregunta seleccionada:', this.pregunta);
    console.log('Array de Balones:', this.pregunta ? this.pregunta.arrayBalones : []);
    }

  async mostrarMensaje(balon: string) {
  const alert = await this.alertController.create({
    header: 'Balón Seleccionado',
    message: `Mensaje personalizado para ${balon} y la opción de mesa ${this.opcionMesa}`,
    buttons: ['OK']
  });

  await alert.present();

  this.limpiarPantalla();
}

  limpiarPantalla() {
    this.preguntaSeleccionadaId = '';
    this.pregunta = { id: '', nombre: '' };
    this.opcionMesa = '';
  }
}