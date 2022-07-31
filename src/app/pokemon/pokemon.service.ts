import { Injectable } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Injectable()
  
export class PokemonService {

  // Retourne la liste des pokemons
  getPokemonList(): Pokemon[]{
    return POKEMONS;
  }
  // Permet de retourner un pokemeon sachant son identifiant
  getPokemonById(pokemonId: number) : Pokemon | undefined{
   return POKEMONS.find(pokemon => pokemon.id == pokemonId);
  }
  
  // Permet de retourner la liste des types de pokemon
  getPokemonTypeList() : string [] {
    return [
    'Plante', 
    'Feu', 
    'Eau', 
    'Insecte', 
    'Normal', 
    'Electrik', 
    'Poison', 
    'Fée', 
    'Vol', 
    'combat',
    'Psy'
  ];
  }

}
