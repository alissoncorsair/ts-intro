type Todo = {
    title: string,
    description: string,
    completed: boolean
};

const todo: Readonly<Todo> = { //to passando um Generic (Readonly) para tornar meu objeto imutavel
    title: "Estudar Typescript e Node",
    description: "just do it!",
    completed: false
};

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) { //Partial permite eu passar apenas partes dos atributos do meu tipo
    return {...todo, ...fieldsToUpdate};
}

const updatedTodo = updateTodo(todo, { completed: true });
console.log(updatedTodo); 

type TodoPreview = Pick<Todo, "title" | "completed">;

const todoP: TodoPreview = {
    title: "algo",
    completed: false,
};

type TodoOmit = Omit<Todo, "description">;

const todoO: TodoOmit = {
    title: "outro algo",
    completed: false,
}