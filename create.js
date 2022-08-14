// Saving to local storage:
let count = 0;
function savelocal(todo) {
  //Check: if item/s are there;
  let todos = [];
  if (localStorage.getItem(`todos${count}`) === null) {
    todos[count] = [];
  } else {
    todos[count] = JSON.parse(localStorage.getItem(`todos${count}`));
  }
  if (localStorage.length === 0) {
    count = 0;
  }
  todos[count].push(todo);
  localStorage.setItem(`todos${[count]}`, JSON.stringify(todos[count]));
  count++;
  return todos;
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
