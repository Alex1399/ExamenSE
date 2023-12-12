import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertController, AlertInput } from '@ionic/angular';

@Component({
  selector: 'app-ingreso',
  templateUrl: 'ingreso.page.html',
})
export class IngresoPage {
  public arfData: any;
  public alertButtons = ['OK'];
  public alertInputs = [
    {
      placeholder: 'Nombre',
    },
    {
      placeholder: 'Apellido (max 8 characters)',
      attributes: {
        maxlength: 8,
      },
    },
    {
      type: 'number',
      placeholder: 'Edad',
      min: 1,
      max: 100,
    },
    {
      type: 'textarea',
      placeholder: 'Sobre Ti',
    },
  ];
  constructor(private http: HttpClient, private router: Router, private alertController: AlertController) {} 
  ngOnInit() {
    // Llamada HTTP para obtener el archivo JSON de ajm

    // Llamada HTTP para obtener el archivo JSON de arf
    this.http.get('/assets/banco/datos.json').subscribe(
      (data: any) => {
        this.arfData = data.arf;
      },
      (error) => {
        console.error('Error al cargar el archivo JSON (arf)', error);
      }
    );
  }
  // Configurar la alerta
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Por Favor Introduce tu Informacion',
      buttons: this.alertButtons,
      inputs: this.alertInputs as AlertInput[],
    });

    await alert.present();

    const { data } = await alert.onDidDismiss();

    // Verificar si se ingresaron datos
    if (data && data.values) {
      // Navegar a otra página
      this.router.navigate(['/privado']).then(() => {
        // Cerrar la alerta después de la navegación
        alert.dismiss();
      });
    }
  }
}