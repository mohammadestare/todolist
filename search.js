//
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
  append_taks_list(tasks);
};

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
  node.innerHTML = `  <div class="parent" id="${index}">  
                      <img src="asse/edit.png"   class="edit_img_icon" /> 
                      <div class="edit_div edit"> 
                        <h3 class="edit_text"  >${task.text}</h3> 
                        <p class="edit_desc">${task.desc}</p></div> 
                      <div class="dot ${
                        task_color[task.category]
                      }" Id="dot1"> <button value="${index}" id="${index}" class="trash" href="search.js" onclick="delete_task(${index})"  > <img src="asse/trash.png" class="img2"  /> </button></div> 
                       
                      
                   </div> 
                   <div class="del">  
                    
                   <h5 class="del">Daily Ui challenge</h5> 
                   <p class="del"> create To-Do list app</p> 
                   </div> `;

  return node;
}

/////////////////////////////////////////////////////////////
/////////////////// SEARCH METHOD        ////////////////////
////////////////////////////////////////////////////////////

function search_items() {
  // main search method
  // find match taks and send them into dom
  const input = document.getElementById("search");
  const value = input.value; // test
  list_of_match = find_tasks(value);
  set_taks_result(list_of_match);
}

function find_tasks(value) {
  // this function only find match values of taks
  let filter_task = {};
  tasks = JSON.parse(localStorage.getItem("todos"));
  if (!value) {
    return tasks;
  }
  for (let key in tasks) {
    //1,2,3
    if (tasks[key].text.includes(value)) {
      filter_task[key] = tasks[key];
    }
  }
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
  // main search method
  // find match taks and send them into dom
  const input = document.getElementById("search");
  input.value = "";
  location.reload();
}

function delete_task(index) {
  tasks = JSON.parse(localStorage.getItem("todos"));
  delete tasks[index];
  localStorage.setItem("todos", JSON.stringify(tasks));
  location.reload();
}

/////////////////////////////////////////////////////////////
/////////////////// hover logic ////////////////////
////////////////////////////////////////////////////////////
let toop = document.getElementById("searchicon");
let sel = document.querySelector(".del");
let sol = document.querySelector(".parent");
toop.addEventListener("click", function () {
  sel.style.visibility = "visible";
  sol.style.visibility = "hidden";
});
