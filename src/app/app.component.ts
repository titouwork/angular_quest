import { Component, OnInit } from "@angular/core";
import { POKEMONS } from "./mock-pokemon-list";
import { Pokemon } from "./pokemon";

@Component({
  selector: "app-root",
  templateUrl: './app.components.html',
})
export class AppComponent implements OnInit {
  pokemonsList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon|undefined;

  ngOnInit() {
    console.table(this.pokemonsList);
  }

  selectPokemon(pokemonId: string) {
    const pokemon: Pokemon | undefined = this.pokemonsList.find(p => p.id === +pokemonId);
    if (pokemon) {
      console.log(`Pokémon demandé: ${pokemon.name}`);
    } else {
      console.log(`Vous avez demandé un pokémon qui n'existe pas !!!`);
    }
    this.pokemonSelected = pokemon;
  }
}
