import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formLogin = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.min(3)]),
    apellido: new FormControl('', Validators.required),
  });

  constructor(private usuariosService : UsuariosService, private router: Router) { }

  ngOnInit(): void {
  }


public login(): void{

  let nombre = this.formLogin.get('nombre')?.value;
  let apellido = this.formLogin.get('apellido')?.value;
  if(nombre != null && apellido != null){
    this.usuariosService.getUsuario(nombre, apellido).subscribe(respuesta =>{
      console.log("Resultado de la peticion: ",respuesta);
    });
  }

  this.router.navigate(['rickandmorty']);

}

}
