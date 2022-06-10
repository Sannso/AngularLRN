import { Component, OnInit } from '@angular/core';
import { RickandmortyService } from '../services/rickandmorty.service';

@Component({
  selector: 'app-rickandmorty',
  templateUrl: './rickandmorty.component.html',
  styleUrls: ['./rickandmorty.component.css']
})
export class RickandmortyComponent implements OnInit {

  constructor(private rickandmorty: RickandmortyService) {
    this.rickandmorty.getCharacterById(2).subscribe(respuesta =>{
      console.log("Resultado de la peticion: "+ respuesta);
    });

  }

  ngOnInit(): void {
  }

}
