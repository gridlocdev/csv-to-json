"use strict";
// Take the content from a csv file, and turn it into a JSON file.
exports.__esModule = true;
var fs = require("fs");
var Todo = /** @class */ (function () {
    function Todo(id, text, completed) {
        this.id = id;
        this.text = text;
        this.completed = completed;
    }
    return Todo;
}());
var csv = fs.readFileSync("./todos.csv").toString();
var rows = csv.split('\n');
var headers = rows[0].split(",");
var body = rows.slice(1, rows.length);
var todos = [];
body.forEach(function (row) {
    var cells = row.split(",");
    var todoItem = new Todo(parseInt(cells[0]), cells[1], Boolean(JSON.parse(cells[2])));
    todos.push(todoItem);
});
console.log(todos);
fs.writeFileSync("./todos.json", JSON.stringify(todos, null, 4));
