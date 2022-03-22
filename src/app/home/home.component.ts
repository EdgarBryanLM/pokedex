import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private servicio:PokemonService) { }

  ngOnInit() {

    this.servicio.getPokemon().subscribe(res => {

      console.log(res);

    });
  }

}
