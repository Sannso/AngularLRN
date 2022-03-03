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
  squareEnable = false
  registros = 0
  userStatus = "El usuario no esta registrado"

  constructor() { }

  ngOnInit(): void {
  }

  getCodigo(){
    return this.codigo
  }

  getEdad(){
    return parseInt(this.edad)
  }
  
  setUserStatus(event:Event){
    if((<HTMLInputElement>event.target).value == "si"){
      this.userStatus = "El usuario esta registrado"
    }else{
      this.userStatus = "El usuario no esta registrado"
    }
  }

  messegeUserRegister(){
    //alert("El usuario se ha registrado")
    this.registros +=1
  }

  // Para el biding bidireccional es necesario agragar modulo 
  // FormsModule
  /*setEmpresa(value:string){
    this.empresa = value
  }*/

}
