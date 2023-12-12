import { Component, OnInit } from '@angular/core';
import banco from 'src/assets/banco/analisis.json';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-privado',
  templateUrl: './privado.page.html',
  styleUrls: ['./privado.page.scss'],
})
export class PrivadoPage implements OnInit {
  public analisis: any = banco;
  public arrayPregunta: any = [];
  public arrayBalon: any = [];
  public arrayMesa: any = [];

  public selectIdBalon: number = 0;
  public selectIdMesa: number = 0;
  public selectIdPregunta: number = 0;

  codigoPre: any;
  constructor(private toastController: ToastController) {}

  ngOnInit() {
    for (var codigoPregunta in this.analisis) {
      let objetoPregunta = { id: codigoPregunta, nombre: this.analisis[codigoPregunta].pregunta };
      this.arrayPregunta.push(objetoPregunta);
    }
  }

  async selectPregunta(event: CustomEvent) {
    this.selectIdBalon = 0;
    this.selectIdMesa = 0;
    this.arrayBalon = [];
    this.arrayMesa = [];
    const preguntaId = event.detail.value;
    this.codigoPre = preguntaId;

    // Mostrar el mensaje de la categoría de pregunta
    const mensajeCategoria = this.analisis[this.codigoPre].solia;
    await this.presentToast({ mensaje: mensajeCategoria });

    // Limpiar arrayBalon antes de agregar nuevos elementos
    for (var codigoBalon in this.analisis[preguntaId].balones) {
      let objetoBalon = { id: codigoBalon, nombre: this.analisis[preguntaId].balones[codigoBalon].balon };
      this.arrayBalon.push(objetoBalon);
    }
  }

  selectBalon(event: CustomEvent) {
    this.selectIdMesa = 0;
    this.arrayMesa = [];

    const balonId = event.detail.value;

    console.log('Balón seleccionado:', balonId);

    // Verificar si se seleccionó un balón válido
    if (balonId !== 0) {
      const mesaKeys = Object.keys(this.analisis[this.codigoPre].balones[balonId].mesas);

      // Iterar sobre las claves para construir el arrayMesa
      mesaKeys.forEach((codigoMesa) => {
        let mesa = this.analisis[this.codigoPre].balones[balonId].mesas[codigoMesa];
        let objetoMesa = { id: codigoMesa, nombre: mesa.nombre, mensaje: mesa.mensaje };
        this.arrayMesa.push(objetoMesa);
      });
    }
  }

  selectMesa(event: CustomEvent) {
    const mesaId = event.detail.value;

    if (mesaId !== 0) {
      // Buscar el objeto mesa en arrayMesa
      const mesaSeleccionada = this.arrayMesa.find((mesa: { id: number }) => mesa.id === mesaId);

      if (mesaSeleccionada) {
        // Mostrar un toast con el nombre de la mesa
        this.presentToast(mesaSeleccionada);
      } else {
        console.error('Error: Mesa no encontrada');
      }

      // Restablecer valores después de enviar el mensaje
      this.selectIdBalon = 0;
      this.selectIdMesa = 0;
      this.selectIdPregunta = 0;
      this.arrayBalon = [];
      this.arrayMesa = [];
    }
  }

  async presentToast(mesa: any) {
    const toast = await this.toastController.create({
      message: `${mesa.mensaje}`,
      duration: 5000,
      position: 'middle',
      cssClass: 'degraa',
      color: 'danger',
    });

    await toast.present();
  }
}
