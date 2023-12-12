import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-privado',
  templateUrl: './privado.page.html',
  styleUrls: ['./privado.page.scss'],
})
export class PrivadoPage implements OnInit {
  public analisis: any;
  public arrayPregunta: any = [];
  public arrayBalon: any = [];
  public arrayMesa: any = [];

  public selectIdBalon: number = 0;
  public selectIdMesa: number = 0;
  public selectIdPregunta: number = 0;

  codigoPre: any;

  constructor(
    private httpClient: HttpClient,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    // Llamada HTTP para obtener el archivo JSON
    this.httpClient.get('analisis.json').subscribe(
      (data: any) => {
        this.analisis = data;

        // Resto del código para inicializar propiedades
        for (const codigoPregunta in this.analisis) {
          const objetoPregunta = { id: codigoPregunta, nombre: this.analisis[codigoPregunta].pregunta };
          this.arrayPregunta.push(objetoPregunta);
        }
      },
      (error) => {
        console.error('Error al cargar el archivo .Json', error);
      }
    );
  }

}  
