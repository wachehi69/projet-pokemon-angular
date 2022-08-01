import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styles: [
  ]
})
export class ListPokemonComponent implements OnInit {

  pokemonList: Pokemon[];

  constructor(
    private router: Router,             // permet d'utiliser la methode navigate pour le routage des routes
    private  pokemonService: PokemonService
    ){ }

    ngOnInit(): void {
     this.pokemonList = this.pokemonService.getPokemonList();
    }

  goToPokemon(pokemon: Pokemon){
    this.router.navigate(['/pokemon', pokemon.id])  // permet de diriger le click vers le detail d'un pokemon sachant sont id
  }
  
}
