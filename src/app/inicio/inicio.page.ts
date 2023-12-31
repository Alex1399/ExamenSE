import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  public ajmData: any;
  public arfData: any;

  constructor(private http: HttpClient, private router: Router) {} 

  irAPrivado() {
    this.router.navigate(['/ingreso']);
  }

  ngOnInit() {
    this.http.get('/assets/banco/datos.json').subscribe(
      (data: any) => {
        this.ajmData = data.ajm;
      },
      (error) => {
        console.error('Error al cargar el archivo JSON (ajm)', error);
      }
    );

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
