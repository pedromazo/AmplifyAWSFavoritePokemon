import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';

import { PokemonComponent } from './pokemon/pokemon.component';

const routes: Routes = [
  { path: 'pokemon', component: PokemonComponent },
  { path: 'new', component: NewComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
