import { Component, OnInit } from '@angular/core';
import { APIService, Todo } from '../API.service';
import { NewComponent } from '../new/new.component';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  public todos: Array<Todo> = [];

  constructor(
    private newComponent: NewComponent,
    private api: APIService
  ) { }

  ngOnInit(): void {
    this.api.ListTodos().then((event) => {
      this.todos = event.items as Todo[];
    });
    console.log(this.todos)
  }

}
