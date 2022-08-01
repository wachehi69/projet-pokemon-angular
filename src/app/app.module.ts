import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PokemonModule } from './pokemon/pokemon.module';

@NgModule({
  declarations: [
    AppComponent, 
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,         //importer le formsModule, il concerne les formulaires d'angulare
    PokemonModule,       // ici on va charger d'abord le pokemonModule avant AppRoutingModule pour eviter un probleme des routes
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
