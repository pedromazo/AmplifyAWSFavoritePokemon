import { Component, OnDestroy, OnInit } from '@angular/core';
import {Form, FormBuilder, FormGroup, Validators} from "@angular/forms";
import { AuthClass } from '@aws-amplify/auth/lib-esm/Auth';
import { Subscription } from 'rxjs';
import {APIService, Todo} from "../API.service";

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  title = "amplify-angular-app";
  public createForm: FormGroup;
  public todos: Array<Todo> = [];
  private subscription: Subscription | null = null;


  constructor(private api: APIService, private fb: FormBuilder, private authClass: AuthClass) {
    this.createForm = this.fb.group({
      pokemonName: ["", Validators.required],
      user: ["", Validators.required]
    });
  };


  async ngOnInit() {
    this.api.ListTodos().then((event) => {
      this.todos = event.items as Todo[];
    });

    this.subscription = <Subscription>(
      this.api.OnCreateTodoListener.subscribe((event: any) => {
        const newRestaurant = event.value.data.onCreateRestaurant;
        this.todos = [newRestaurant, ...this.todos];
      })
    );
    console.log(this.authClass.currentSession)
  }

  ngOnDestroy() {
  }

  public onCreate(todo: Todo) {
    this.api
      .CreateTodo(todo)
      .then((event) => {
        console.log("item created!");
        this.createForm.reset();
      })
      .catch((e) => {
        console.log("error creating todo...", e);
      });
  }
}
