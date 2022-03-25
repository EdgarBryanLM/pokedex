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
    Estadisticas:boolean=true;
    Galeria:boolean=false;

    
 async ngOnInit() {

  await  this.servicio.getPokemon('lucario').subscribe(async (res:pokemon) => {

      this.Pokemon=res;
      console.log(this.Pokemon.sprites.other?.home.front_default);
      console.log( this.Pokemon.held_items);
      console.log( this.Pokemon.game_indices);
      console.log( this.Pokemon.location_area_encounters);
    console.log(this.Pokemon.sprites.other?.['official-artwork'].front_default);
    


    });

    for (let i = 0; i <  this.Pokemon.stats.length; i++) {
      console.log('Hola');
      
      
    }
  }



  estadisticas(){
    console.log(!this.Estadisticas);
    
    if (!this.Estadisticas){
      this.Estadisticas=true;
      this.Galeria=false;
    }
  }

  
  galeria(){
    console.log(this.Estadisticas);

    if (!this.Galeria){
      this.Galeria=true;
      this.Estadisticas=false;
    }
  }


  GetPokemon(nombre:string){
      this.servicio.getPokemon(nombre).subscribe(async (res:pokemon) => {

      this.Pokemon=res;
      console.log(this.Pokemon.sprites.other?.home.front_default);
      console.log( this.Pokemon.held_items);
      console.log( this.Pokemon.game_indices);
      console.log( this.Pokemon.location_area_encounters);
    console.log(this.Pokemon.sprites.other?.['official-artwork'].front_default);
    


    });

    for (let i = 0; i <  this.Pokemon.stats.length; i++) {
      console.log('Hola');
      
      
    }
  }

}
