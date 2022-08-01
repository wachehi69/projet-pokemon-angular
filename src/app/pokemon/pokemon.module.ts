import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { RouterModule, Routes } from '@angular/router';
import { PokemonService } from './pokemon.service';
import { FormsModule } from '@angular/forms';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';

const pokemonRoutes : Routes = [
{ path:'pokemons', component: ListPokemonComponent },
{ path: 'pokemon/:id', component: DetailPokemonComponent },
];

@NgModule({
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    PokemonFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,    // Gere les ngform e et ngModel pour les formulaires angular
    RouterModule.forChild(pokemonRoutes)
  ],
  providers: [PokemonService]     // on va arroser le service PokemonService uniquement dans le module pokemon et non pas toute l'appli
})
export class PokemonModule { }
