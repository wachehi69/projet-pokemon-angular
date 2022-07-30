import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styles: [
  ]
})
export class ListPokemonComponent  {

  pokemonList: Pokemon[] = POKEMONS;

  constructor(private router: Router){

  }

  goToPekemon(pokemon: Pokemon){
    this.router.navigate(['/pokemon', pokemon.id])
  }
  
}
