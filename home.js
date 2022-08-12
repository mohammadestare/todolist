//

//
console.log(window.localStorage.todos);
const task_color = {
  work: "blue",
  personal: "green",
  shopping: "purple",
  work: "red",
  other: "violet",
};

window.onload = () => {
  tasks = JSON.parse(localStorage.getItem("todos"));

  append_taks_list(tasks);
};
let task_left = JSON.parse(localStorage.todos).length;
function append_taks_list(tasks) {
  // this function add task into ul element
  const task_list = document.querySelector("#task_list");
  tasks.forEach(function (task) {
    task_list.appendChild(createLielement(task));
  });
}

function createLielement(task) {
  // this function create li tag with taks information
  const node = document.createElement("li");
  node.innerHTML = `
  ${task.time}

  <hr />
</li>

<li class="e"></li>
<div class="check-btn active">
  <h3>${task.text}</h3>
  <p class="p-task">${task.desc}</p>
</div>`;
  return node;
}
let left_class = document.getElementById("left_class");
left_class.textContent = task_left;
