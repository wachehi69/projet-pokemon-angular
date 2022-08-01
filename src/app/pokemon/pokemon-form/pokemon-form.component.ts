import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html'
})
export class PokemonFormComponent implements OnInit {

  @Input() pokemon: Pokemon; // lorsque on veut afficher ou modifier un pokemon, ce que je veux c'est de me passer un pokemon
  types : string [];
  constructor(
    private router: Router,
    private  pokemonService: PokemonService) { }

  ngOnInit() {
    this.types = this.pokemonService.getPokemonTypeList();
  }

  // Methode permettant de verifier si le pokemon encours d'edition possede déjà
  // le type passé par parametre ou pas
  hasType(type: string) : boolean {
    return this.pokemon.types.includes(type)  // includes permet de verifier si le pokemon en question a le type passé en parametre ou pas


  }

  // methode permettant de selectionner un type si il n'est pas deja selectionné
  // si il est sectionner , il faut enlever la selection.
  selectType($event: Event, type: string){
    const isCheked: boolean  = ($event.target as HTMLInputElement).checked;  // permet de verifier si l'utilisateur à cocher ou non la case à choser

   if(isCheked){    // si l'utilisateur à cocher il faut ajouter dans la liste de tableau des types du pokemon courant, le type passé en parametre
    this.pokemon.types.push(type)   // ici on ajoute dans le tableau
   } else {
    // je vais recuperer l'index dans le tableau du type pokemon courant
    const index = this.pokemon.types.indexOf(type);
    this.pokemon.types.splice(index,1)      // ici on le retire du tableau

   }
  }
  // methode d'envoie de formulaire
  onSubmit(){
    console.log('submit form !');
    this.router.navigate(['/pokemon', this.pokemon.id]);

  }

  // cette methode permet de bloquer ou debloquer le checkbox 
  //selon les regles.

  isTypesValid(type: string): boolean {
     // si j'ai un seul checkbox coché et celui-ci est le type courant
     // il faut bloquer l'utilisateur de le décocher, car il faut un minimun de 1 type et 3 maximun
     if(this.pokemon.types.length == 1 && this.hasType(type)){
     return false; 
     }

     if(this.pokemon.types.length >2 && !this.hasType(type)) { // ici on bloque l'utilisateur de cocher plus 3
     return false;
  }
  return true;

 }
}
