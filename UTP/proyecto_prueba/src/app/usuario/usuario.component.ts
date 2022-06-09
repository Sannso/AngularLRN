import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent{

  public idUsuario: number | undefined | null;
  public nombre: string | undefined | null;
  public edad: number | undefined | null;
  public estado: boolean | undefined | null;

}
