import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Registro de usuario';
  mensaje = "";
  registrado = false;
  nombre:String = "";
  apellido:String = "";
  entradas:any[]; 

  // Para crear tipos de datos 
  /*
  interface Provider {
    region: string,
    country: string,
    locale: string,
    company: string
}

let countryProviders: Array<Provider>;
let allProviders: Array<Provider>;
  */ 

  constructor(){
    this.entradas = [
      {title: "Entrada numero 1"},
      {title: "Entrada numero 2"},
      {title: "Entrada numero 3"},
      {title: "Entrada numero 4"},
    ]
       
  }

  registrarUsuario(){
    this.registrado = true
    this.mensaje = "El usuario "+this.nombre +" "+ this.apellido +" se ha registrado con exito"
  }
}
