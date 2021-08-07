// Take the content from a csv file, and turn it into a JSON file.

import fs = require('fs')

class Todo {
    id: number;
    text: string;
    completed: boolean;

    constructor(
        id: number,
        text: string,
        completed: boolean,
    ) {
        this.id = id
        this.text = text
        this.completed = completed
    }
}

const csv: string = fs.readFileSync("./todos.csv").toString()

const rows: string[] = csv.split('\n')

const headers: string[] = rows[0].split(",")

const body = rows.slice(1, rows.length)

const todos: Todo[] = []

body.forEach(row => {
    let cells: string[] = row.split(",")
    let todoItem: Todo = new Todo(
        parseInt(cells[0]),
        cells[1],
        Boolean(JSON.parse(cells[2]))
    );

    todos.push(todoItem)
});

console.log(todos)

fs.writeFileSync("./todos.json", JSON.stringify(todos, null, 4))
