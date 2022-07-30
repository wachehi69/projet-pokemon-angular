import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  
})
export class DetailPokemonComponent implements OnInit {

  PokemonList: Pokemon [];
  pokemon: Pokemon|undefined;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.PokemonList = POKEMONS;
    // Récuperation de l'id  provenant de la route
    const pokemonId: string | null = this.route.snapshot.paramMap.get('id');   // ici c'est grace à ActivatedRoute
   if(pokemonId){
    this.pokemon = this.PokemonList.find(pokemon => pokemon.id == +pokemonId)
   }
    
  }
  // bouton retour
  goToPokemonList() {
   this.router.navigate(['/pokemons'])     //ici c'est grâce au service  Router qui permet de naviguer d'un lien à l'autre
  }

}
