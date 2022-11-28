import { Todo } from './todo';

export async function getTodos(): Promise<Todo[]> {
    return await (await fetch("assets/db.json")).json()
}
