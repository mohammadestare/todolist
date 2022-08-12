// Saving to local storage:
function savelocal(todo) {
  //Check: if item/s are there;
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.push(todo);
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
