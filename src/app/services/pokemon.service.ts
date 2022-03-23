import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pokemon } from '../interfaces/pokemon.interface';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http:HttpClient) { }
  url:string='https://pokeapi.co/api/v2/pokemon/ditto';

  getPokemon(){
    return this.http.get<pokemon>(this.url);
  }
}
