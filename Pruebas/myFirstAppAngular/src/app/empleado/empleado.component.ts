import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  nombre = "Juan"
  apellido = "Perez"
  private codigo = "1002"
  edad = "43"
  empresa = "Nose.SA" 


  constructor() { }

  ngOnInit(): void {
  }

  getCodigo(){
    return this.codigo
  }

  getEdad(){
    return parseInt(this.edad)
  }


}
