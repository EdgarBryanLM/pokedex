import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { pokemon } from '../interfaces/pokemon.interface';
import { PrimeNGConfig, SelectItem, SelectItemGroup } from 'primeng/api';
interface City {
  name: string,
  code: string
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


    Pokemon!:pokemon;
    Estadisticas:boolean=true;
    Galeria:boolean=false;
    visibleSidebar1!:any;

    pokemon:boolean=true;
    selectedCountry!: any;

    countries!: any[];


    items: SelectItem[];

    item!: any;

    constructor(private servicio:PokemonService,private primengConfig: PrimeNGConfig) {
      this.items = [];
      for (let i = 0; i < 10000; i++) {
          this.items.push({label: 'Item ' + i, value: 'Item ' + i});
      }

      this.servicio.getAll().subscribe((res:any)=>{
        console.log(res);
        console.log(res.results);
        this.countries=res.results;

      });

     }

 async ngOnInit() {
  this.primengConfig.ripple = true;
  await  this.servicio.getPokemon('pikachu').subscribe(async (res:pokemon) => {

      this.Pokemon=res;
    });





/*     this.countries = [ 'France','Germany', 'India','Japan','Spain','United States'];
 */  }



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


  MostrarPokemon(){
    console.log(this.pokemon);

    if(!this.pokemon){
      this.pokemon=true;
    }
  }

  MostratAll(){
    console.log(this.pokemon);

  if(this.pokemon){
    this.pokemon=false;
  }
  }
}
