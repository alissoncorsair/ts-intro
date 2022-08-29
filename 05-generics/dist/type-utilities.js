"use strict";
const todo = {
    title: "Estudar Typescript e Node",
    description: "just do it!",
    completed: false
};
function updateTodo(todo, fieldsToUpdate) {
    return Object.assign(Object.assign({}, todo), fieldsToUpdate);
}
const updatedTodo = updateTodo(todo, { completed: true });
console.log(updatedTodo);
const todoP = {
    title: "algo",
    completed: false,
};
const todoO = {
    title: "outro algo",
    completed: false,
};
