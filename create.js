// Saving to local storage:
let count = 0;
function savelocal(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = {};
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  index = (parseInt(Object.keys(todos).at(-1)) || 0) + 1;

  console.log(index);
  todos[index] = todo;
  localStorage.setItem("todos", JSON.stringify(todos));
}

function submit_infos() {
  const inputs = document.querySelectorAll("input");

  information = {};
  inputs.forEach(function (input) {
    if (input.type === "radio" && input.checked === false) {
      return;
    }

    information[input.name] = input.value;
  });
  console.log(information);
  savelocal(information);
}
