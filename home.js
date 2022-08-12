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
let psn = 0;
let wrk = 0;
let heth = 0;
let shop = 0;
for (let i = 0; i < task_left; i++) {
  if (JSON.parse(localStorage.todos)[i].category == "shopping") {
    shop++;
  } else if (JSON.parse(localStorage.todos)[i].category == "work") {
    wrk++;
  } else if (JSON.parse(localStorage.todos)[i].category == "personal") {
    psn++;
  } else if (JSON.parse(localStorage.todos)[i].category == "health") {
    heth++;
  }
}
console.log(psn, wrk, shop, heth);

let left_class = document.getElementById("left_class");
let left_creat = document.getElementById("created");
let left_work = document.getElementById("work");
let left_shop = document.getElementById("shop");
let left_pers = document.getElementById("personal");
let left_heath = document.getElementById("heath");
let left_today = document.getElementById("today");
left_class.textContent = task_left;
left_work.textContent = `${wrk} task`;
left_shop.textContent = `${shop} task`;
left_pers.textContent = `${psn} task`;
left_heath.textContent = `${heth} task`;
left_creat.textContent = task_left;
left_today.textContent = `Today you have ${task_left} tasks`;
