import { Component, OnInit } from '@angular/core';
import { UsuarioComponent } from '../usuario/usuario.component';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  public mssToHijo : string = "Soy tu padre";
  public mssToHijo2: Array<any> = ["Hola", true];
  public infoUsuarios: Array<UsuarioComponent> = new Array<UsuarioComponent>();

  public saludo: string = "";

  public usuario: UsuarioComponent = new UsuarioComponent;

  constructor() { }

  ngOnInit(): void {
  }

  public sendMssToHijo() : void{
    this.infoUsuarios.push({nombre:"pepo", edad: 20, estado: true, idUsuario:123});
    this.infoUsuarios.push({nombre:"andres", edad: 25, estado: true, idUsuario:124});
  }

  public recibirSaludo($event: any) : void{
    console.log($event);
    this.saludo = $event;
  }

  public mostrarUsuario() : void{
    console.log(this.usuario)
  }

}
