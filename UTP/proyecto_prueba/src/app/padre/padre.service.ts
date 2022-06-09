import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PadreService {

  constructor(private http: HttpClient) { }

  public enviarUsuario(datosUsuario: any){
    return this.http.post(environment.url, datosUsuario);
  }

  public obtenerUsuario(id : string | undefined | null){
    return this.http.get(environment.url+"?id="+id);
  }
}
