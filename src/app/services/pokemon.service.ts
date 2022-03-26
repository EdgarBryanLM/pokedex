import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pokemon } from '../interfaces/pokemon.interface';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http:HttpClient) { }
  url:string='https://pokeapi.co/api/v2/pokemon/';


  getAll(){
  return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=500');
  }
  getPokemon(nombre:string){
    return this.http.get<pokemon>(this.url+nombre);
  }
}
