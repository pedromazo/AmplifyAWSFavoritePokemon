import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { NewComponent } from './new/new.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, PokemonComponent, NewComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyUIAngularModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [NewComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
