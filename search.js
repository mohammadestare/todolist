//
//
//

window.onload = () => {
  tasks = JSON.parse(localStorage.getItem("todos"));
  append_taks_list(tasks);
};

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
  node.innerHTML = `<div class="parent">
                      <img src="asse/edit.png" class="edit in" />
                      <div>
                      <h3 class="in">${task.text}</h3>
                      <p class="in bl">${task.desc}</p></div>
                      <div class="cata"></div>
                      
                   </div>`;
  return node;
}

/////////////////////////////////////////////////////////////
/////////////////// SEARCH METHOD        ////////////////////
////////////////////////////////////////////////////////////

function search_items() {
  // main search method
  // find match taks and send them into dom
  const input = document.getElementById("search");
  const value = input.value;
  list_of_match = find_taks(value);
  set_taks_result(list_of_match);
}

function find_taks(value) {
  // this function only find match values of taks
  tasks = JSON.parse(localStorage.getItem("todos"));
  if (!value) {
    return tasks;
  }
  filter_task = tasks.filter((task) => {
    return task.text.includes(value);
  });
  return filter_task;
}

function set_taks_result(list_of_match) {
  // this function just send the match items into dom
  const task_list = document.querySelector("#task_list");
  // we clear innerhtml to remove last items
  task_list.innerHTML = "";
  append_taks_list(list_of_match);
}

/////////////////////////////////////////////////////////////
/////////////////// remove button ////////////////////
////////////////////////////////////////////////////////////
function remove_btn() {
  console.log("test");
  // main search method
  // find match taks and send them into dom
  const input = document.getElementById("search");
  input.value = "";
}
