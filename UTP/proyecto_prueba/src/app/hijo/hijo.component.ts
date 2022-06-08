import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsuarioComponent } from '../usuario/usuario.component';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  constructor() { }

  @Input() recibido : string | undefined;
  @Input() recibido2 : Array<any> | undefined;
  @Input() usuarios: Array<UsuarioComponent> = new Array<UsuarioComponent>();

  @Output() enviarPapa = new EventEmitter<string>();

  ngOnInit(): void {
    console.log(this.recibido);
  }

  public enviar(){
    this.enviarPapa.emit("Hola papá");
  }

}
