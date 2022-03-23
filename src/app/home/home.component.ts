import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { pokemon } from '../interfaces/pokemon.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private servicio:PokemonService) { }
    Pokemon!:pokemon;


    
 async ngOnInit() {

  await  this.servicio.getPokemon().subscribe(async (res:pokemon) => {

      this.Pokemon=res;
      console.log(this.Pokemon.sprites.other?.home.front_default);
      console.log( this.Pokemon.stats);
      

    });

    for (let i = 0; i <  this.Pokemon.stats.length; i++) {
      console.log('Hola');
      
      
    }
  }

}
