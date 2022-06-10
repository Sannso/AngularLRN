import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto_prueba';
  public nombre: string = "Santiago";
  public nombres: string[] = ["Carlos", "Andres"];
  public nombres2: string[] = ["Juan", "Yeris"]
  public usuarios: UsuarioComponent[] = [];
  public imageUrl: string = "https://placeimg.com/600/300/any";

  constructor(private router: Router){
    this.addLastElement("Ana");
    this.nombres = this.concat(this.nombres, this.nombres2);

    //Obtener posicion de un item
    let indexName = this.nombres.indexOf("Ana");

    //Mover un elemento de la lista
    this.nombres.splice(indexName,2);

    //Agregar usuarios
    let usuario: UsuarioComponent = new UsuarioComponent;
    let usuario2: UsuarioComponent = new UsuarioComponent;
    usuario = {nombre: "Felipe Arias", edad: 20, idUsuario: 1, estado: true};
    usuario2 = {nombre: "Alejandra Zapata", edad: 22, idUsuario: 2, estado: true};
    this.usuarios.push(usuario);
    this.usuarios.push(usuario2);

    router.navigate(['login']);
  }

  public changeImg() : void{
    let random : number = Math.round(Math.random());
    let imgs : string[] = ["animals", "nature"]
    this.imageUrl = "https://placeimg.com/600/301/"+imgs[random];
    console.log("Imagen cambiada")
  }

  public addLastElement(name: string) : void{
    this.nombres.push(name);
  }

  public deleteFirstElement() : void{
    let respuesta = this.nombres.shift();
    console.log("Se elimino", respuesta);
  }

  public deleteLastElement() : void{
    let respuesta = this.nombres.pop();
    console.log("Se elimino", respuesta);
  }

  public concat(nombres: string[], array: string[]) : string[]{
    return nombres.concat(array);
  }


  public deleteByID(value: string) : void{
    let id: number = Number(value);
    this.usuarios.forEach(element => {
      if(element.idUsuario == id){
        this.usuarios.splice(this.usuarios.indexOf(element));
      }
    });
  }
}
