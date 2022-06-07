import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent{

  public idUsuario: number | undefined;
  public nombre: string | undefined;
  public edad: number | undefined;
  public estado: boolean | undefined;

}
