import { Component } from '@angular/core';
import { Todo } from './todo';
import { getTodos } from './todo.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {
    title = 'ESERCIZIO28';
    todos!:Todo[];

    constructor() {
        getTodos().then(todos => {
            console.log(todos);
            this.todos = todos;
            this.completeAll();
            console.log(this.todos);
        })
    }

    completeAll(){
        this.todos = this.todos.map (todo => {
            return {
                ...todo, completed: true
            }
        })
    }
}
