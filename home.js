//

//
console.log(window.localStorage.todos);
let li_n = 0;
const task_color = {
  work: "blue",
  personal: "green",
  shopping: "purple",
  work: "red",
  other: "violet",
};
let i = 0;

window.onload = () => {
  for (let j = 0; j < localStorage.length; j++) {
    tasks = JSON.parse(localStorage.getItem(`todos${j}`));
    append_taks_list(tasks);
  }
};

while (i < localStorage.length - 1) {
  console.log(i);

  function append_taks_list(tasks) {
    // this function add task into ul element
    const task_list = document.querySelector("#task_list");
    tasks.forEach((tasks) => {
      task_list.appendChild(createLielement(tasks));
      li_n += 1;
    });
  }
  i++;
}

function createLielement(task) {
  // this function create li tag with taks information
  const node = document.createElement("li");
  node.innerHTML = `  

    <div class="time">${task.time}</div>
  <div class="parent" id="li_n${li_n}"  > 
                      
                      <div class="edit_div edit">
                        <h3 class="edit_text"  >${task.text}</h3>
                        <p class="edit_desc">${task.desc}</p></div>
                      <div class="dot ${
                        task_color[task.category]
                      }" Id="dot1">  </div>
                      <div class="time">${task.time}</div>`;

  return node;
}
console.log(JSON.parse(localStorage.getItem(`todos0`))[0].category == "health");
let psn = 0;
let wrk = 0;
let heth = 0;
let shop = 0;
for (let o = 0; o < localStorage.length; o++) {
  if (JSON.parse(localStorage.getItem(`todos${o}`))[0].category == "shopping") {
    shop++;
  } else if (
    JSON.parse(localStorage.getItem(`todos${o}`))[0].category == "work"
  ) {
    wrk++;
  } else if (
    JSON.parse(localStorage.getItem(`todos${o}`))[0].category == "personal"
  ) {
    psn++;
  } else if (
    JSON.parse(localStorage.getItem(`todos${o}`))[0].category == "health"
  ) {
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
left_class.textContent = localStorage.length;
left_work.textContent = `${wrk} task`;
left_shop.textContent = `${shop} task`;
left_pers.textContent = `${psn} task`;
left_heath.textContent = `${heth} task`;
left_creat.textContent = localStorage.length;
left_today.textContent = `Today you have ${localStorage.length} tasks`;
li_n++;
