const state = {
  todos: [
    { description: "Drink Beer", done: false },
    { description: "Have fun coding", done: false },
  ],
};

const btn = document.querySelector("#add-todo");
const ipt = document.querySelector("input");
btn.addEventListener("click", () => {
  if (ipt.value.length === 0) {
    alert("Please Enter a Task");
  } else {
    let newTodo = [];

    newTodo.description = ipt.value;
    newTodo.done = false;

    state.todos.push(newTodo);
    renderTodos();
    ipt.value = "";
  }
});

function renderTodos() {
  const list = document.querySelector("#list");
  list.innerHTML = "";

  state.todos.forEach((todo) => {
    const todoLi = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.done;

    checkbox.addEventListener("change", (e) => {
      const newTodoDoneState = e.target.checked;
      todo.done = newTodoDoneState;
    });

    todoLi.appendChild(checkbox);
    const todoText = document.createTextNode(todo.description);
    todoLi.appendChild(todoText);

    list.appendChild(todoLi);
  });
}

renderTodos();

const rmvBotton = document.querySelector("#removeDoneTodos");
rmvBotton.addEventListener("click", () => {
  const notDoneObjects = state.todos.filter((todo) => todo.done === false);

  state.todos = notDoneObjects;

  renderTodos();
});
