import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/api';
import { RickandmortyService } from '../services/rickandmorty.service';

interface Options{
  option: string,
  code: string
};

@Component({
  selector: 'app-rickandmorty',
  templateUrl: './rickandmorty.component.html',
  styleUrls: ['./rickandmorty.component.css']
})

export class RickandmortyComponent implements OnInit{

  //Variables para busqueda por Id
  public id : number = 0;
  public character : any = null;
  public charExist : boolean = false;
  //

  //Variable para busquedas en general
  public inputOption: string = "";
  public charactersFound: Array<any> = [];
  public charsExist : boolean = false;

  //Definicion de opciones
  public options : Array<Options> = [];
  public selectedOption : string;
  //

  //Mensajes
  public mss: Message[] = [];
  public isMss :boolean = false;
  //

  constructor(private rickandmorty: RickandmortyService) {
    this.options = [
      {option: "Seleccionar por id", code: "id"},
      {option: "Seleccionar por nombre", code: "name"},
      {option: "Seleccionar por estado", code: "state"},
      {option: "Seleccionar por especie", code: "species"},
      {option: "Seleccionar por genero", code: "gender"}
    ]
    this.selectedOption = this.options[0].code
  }

  ngOnInit(): void {
  }

  addMessages() {
    this.mss = [
      //{ severity: 'success', summary: 'Success', detail: 'Message Content' },
      //{ severity: 'info', summary: 'Info', detail: 'Message Content' },
      //{ severity: 'warn', summary: 'Warning', detail: 'Message Content' },
      { severity: 'error', summary: 'Error', detail: 'No ha ingresado un valor' },
    ];
  }

  clearMessages() {
    this.mss = [];
  }

  public getCharacter(): void{
    if(this.isMss){this.clearMessages()}
    if(this.selectedOption == "id"){
      this.getCharacterById();
    }
    else if(this.inputOption == ""){
      this.addMessages();
      this.isMss = true;
    }
    else if(this.selectedOption == "name"){
      this.getCharacterByName();
    }
  }

  //public info : Array<any> = [];
  public getCharacterById() : void{
    this.rickandmorty.getCharacterById(this.id).subscribe(respuesta =>{
      console.log("Resultado de la peticion: "+ respuesta);
      this.character = respuesta;
      this.charExist = true;
      this.charsExist = false;
    });
  }

  public getCharacterByName() : void{
    this.rickandmorty.getCharacterByName(this.inputOption.trim()).subscribe(respuesta =>{
      console.log("Resultado de la peticion: "+ respuesta);
      //this.charactersFound = respuesta;
      let resultados :any = respuesta
      this.charactersFound = resultados['results'];
      this.charExist = false;
      this.charsExist = true;
    });

    console.log("nea")

  }

  public lookCharInfo(): void{
    console.log("pa")
    console.log(this.charactersFound)
    this.charactersFound.forEach(element => {
      console.log("pa"+element)
    });
  }
}
