import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  
})
export class DetailPokemonComponent implements OnInit {

  PokemonList: Pokemon [];
  pokemon: Pokemon|undefined;

  constructor(
     private route: ActivatedRoute,
     private router: Router,
     private pokemonService: PokemonService
     ) { }

  ngOnInit(): void {
   // Récuperation de l'id  provenant de la route , id récuperé est toujour un string
    const pokemonId: string | null = this.route.snapshot.paramMap.get('id');   // ici c'est grace à ActivatedRoute
   if(pokemonId){
    this.pokemon = this.pokemonService.getPokemonById(+pokemonId);
   }    
  }
  // bouton retour à la liste des pokemons
  goToPokemonList() {
   this.router.navigate(['/pokemons'])     //ici c'est grâce au service  Router qui permet de naviguer d'un lien à l'autre
  }

}
