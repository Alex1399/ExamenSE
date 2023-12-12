import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-ingreso',
  templateUrl: 'ingreso.page.html',
})
export class IngresoPage {
  public arfData: any;
  public alertButtons = ['OK'];
  public alertInputs = [
    {
      placeholder: 'Name',
    },
    {
      placeholder: 'Nickname (max 8 characters)',
      attributes: {
        maxlength: 8,
      },
    },
    {
      type: 'number',
      placeholder: 'Age',
      min: 1,
      max: 100,
    },
    {
      type: 'textarea',
      placeholder: 'A little about yourself',
    },
  ];
  constructor(private http: HttpClient) {} 
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
}