import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PageNotFoundComponentComponent } from "./page-not-found-component/page-not-found-component.component";
import { PokemonModule } from "./pokemon/pokemon.module";
import { BlockComponent } from './block/block.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponentComponent,
    BlockComponent,
  ],
  imports: [BrowserModule,  PokemonModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
