//
//

const task_color = {
  work: "blue",
  personal: "green",
  shopping: "purple",
  health: "red",
  other: "violet",
};

window.onload = () => {
  tasks = JSON.parse(localStorage.getItem("todos"));
  taks_list = Object.values(tasks);
  let statics = get_static_number(taks_list);
  set_value_into_element(statics);
  append_taks_list(tasks);
};

function get_static_number(taks_list) {
  result_obj = {
    work: 0,
    personal: 0,
    shopping: 0,
    health: 0,
    other: 0,
    total: taks_list.length,
  };
  taks_list.forEach(function (task) {
    result_obj[task.category] = result_obj[task.category] + 1;
  });
  return result_obj;
}

function append_taks_list(tasks) {
  // this function add task into ul element
  const task_list = document.querySelector("#task_list");
  for (let index in tasks) {
    task_list.appendChild(createLielement(index, tasks[index]));
  }
}

function createLielement(index, task) {
  // this function create li tag with taks information
  const node = document.createElement("li");
  node.innerHTML = `  
    <div class="time">
          ${task.time}
    </div>
      <div class="parent" id="index"> 
          <div class="edit_div edit">
            <h3 class="edit_text"  >${task.text}</h3>
            <p class="edit_desc">${task.desc}</p>
          </div>
          <div class="dot ${task_color[task.category]}" Id="dot1">  
          </div>
          <div class="time">${task.time}
          </div>
      </div>`;
  return node;
}

function set_value_into_element(statics) {
  let left_class = document.getElementById("left_class");
  let left_creat = document.getElementById("created");
  let left_work = document.getElementById("work");
  let left_shop = document.getElementById("shop");
  let left_pers = document.getElementById("personal");
  let left_heath = document.getElementById("heath");
  let left_today = document.getElementById("today");

  left_class.textContent = statics.total;
  left_work.textContent = `${statics.work} task`;
  left_shop.textContent = `${statics.shopping} task`;
  left_pers.textContent = `${statics.personal} task`;
  left_heath.textContent = `${statics.health} task`;
  left_creat.textContent = statics.total;
  left_today.textContent = `Today you have ${statics.total} tasks`;
}
