import { Component } from "@angular/core";
// Se crea el decorador
@Component({
    selector: "empleados-root",
    templateUrl: "./empleados.component.html",
    styleUrls: ["./empleados.component.css"]
})


// primero crear el acceso de la clase desde afuera
export class EmpleadosComponent{

}

// INFO SOBRE COMPONENTES
// PARA CREAR COMPONENTES DE FORMA RAPIDOA:
        // cmd -  ng generate component "nombre" -> ng g c "nombre"