import { Component, OnDestroy, OnInit } from '@angular/core';
import {Form, FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Subscription } from 'rxjs';
import {APIService, Favorite} from "./API.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'favoritePokemon';
  public createForm: FormGroup;
  public favorites: Array<Favorite> = []
  private subscription: Subscription | null = null;

  constructor(private api: APIService, private fb: FormBuilder) {
    this.createForm = this.fb.group({
      name: ["", Validators.required],
      pokemon: ["", Validators.required],
      pokemonPicture: ["", Validators.required]
    });
  }

  async ngOnInit() {
    /* fetch favorites when app loads */
    this.api.ListFavorites().then((event) => {
      this.favorites = event.items as Favorite[];
    });

    this.subscription = <Subscription>(
      this.api.OnCreateFavoriteListener.subscribe((event: any) => {
        const newFavorite = event.value.data.onCreateFavorite;
        this.favorites = [newFavorite, ...this.favorites];
      })
    );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = null;
  }

  public onCreate(favorite: Favorite) {
    this.api
      .CreateFavorite(favorite)
      .then((event) => {
        console.log("item created!");
        this.createForm.reset();
      })
      .catch((e) => {
        console.log("error creating favorite...", e);
      });
  }
}
