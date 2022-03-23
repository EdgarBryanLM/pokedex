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
  ngOnInit() {

    this.servicio.getPokemon().subscribe((res:pokemon) => {

      this.Pokemon=res;
      console.log(this.Pokemon.sprites.other?.home.front_default);
      

    });
  }

}
