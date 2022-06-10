import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  public getUsuario(nombre: string, apellido: string){
    return this.http.get(environment.url+"/obtenerPorNombreApellido"+"?nombre="+nombre+"&apellido="+apellido);
  }
}
