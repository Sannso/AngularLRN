import { Component } from '@angular/core';

interface Empleado {
  nombre:String;
  apellido:String;
  cargo:String;
  salario:Number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  nombre:String = "";
  apellido:String = "";
  cargo:String = "";
  salario:Number = 1000;
  empleados:Array<Empleado> = [];
  registrado = false

  registrarUsuario(){
    this.empleados.push({nombre: this.nombre,
       apellido: this.apellido,
       cargo: this.cargo,
       salario: this.salario})
       this.registrado = true
  }



}
