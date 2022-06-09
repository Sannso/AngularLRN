import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioComponent } from '../usuario/usuario.component';
import { PadreService } from './padre.service';

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

  public isLogged: boolean = false;
  public nivel: number = 0;


  // Vars to users
  public loadUser: boolean = false;
  public users: Array<any> = [];


  public formUsuario = new FormGroup({
    nombre: new FormControl('', Validators.required), // Inicia vacio | validaciones
    apellido: new FormControl('', Validators.required),
    telefono: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required])
  });

  public formFindUser = new FormGroup({
    id: new FormControl('', Validators.required)
  });

  constructor(private padreService: PadreService) { }

  ngOnInit(): void {
    //this.consultarUsuario("8");
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

  public guardarUsuario() : void{
    let usuario = {
      nombre: this.formUsuario.get("nombre")?.value,
      apellido: this.formUsuario.get("apellido")?.value,
      telefono: this.formUsuario.get("telefono")?.value,
      email: this.formUsuario.get("email")?.value,
    };

    this.padreService.enviarUsuario(usuario).subscribe(respuesta=>{
      console.log(respuesta);
    })
  }

  public consultarUsuario() : void{
    let id = this.formFindUser.get('id')?.value ? this.formFindUser.get('id')?.value : "0";

    this.padreService.obtenerUsuario(id).subscribe(respuesta=>{
      this.users.push(respuesta);
      console.log(respuesta);
    })

    this.loadUser = true;
  }

}
