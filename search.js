//
//
//
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
  node.innerHTML = `  <div class="parent" id="li_n${li_n}"  > ${li_n}
                      <img src="asse/edit.png"   class="edit_img_icon" />
                      <div class="edit_div edit">
                        <h3 class="edit_text"  >${task.text}</h3>
                        <p class="edit_desc">${task.desc}</p></div>
                      <div class="dot ${
                        task_color[task.category]
                      }" Id="dot1"> <button value="${li_n}" id="num${li_n}" class="trash" href="search.js" onclick="del(${li_n})"  > <img src="asse/trash.png" class="img2"  /> </button></div>
                      
                     
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
  const value = input.value;
  list_of_match = find_taks(value);
  set_taks_result(list_of_match);
}

function find_taks(value) {
  // this function only find match values of taks
  tasks = JSON.parse(localStorage.getItem(`todos${i}`));
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

let toop = document.getElementById("searchicon");
let sel = document.querySelector(".del");
let sol = document.querySelector(".parent");
toop.addEventListener("click", function () {
  sel.style.visibility = "visible";
  sol.style.visibility = "hidden";
});

//function removeSpec() {
// var myList =
//   document.getElementById("task_list"); /* Var to reference the list */
// var length = li_n;
// var checker = "false"; /* boolean-ish value to determine if value was found */
// var btn_t = document.getElementById("num");
//btn_trash.onclick = console.log(btn_t);
// for (var counter = 0; counter < length; counter++) {
//   if (document.getElementById(`li_n${counter}`).textContent == counter) {
//     alert("Counter : " + counter);
//     myList.removeChild(myList.childNodes[counter]);
//     checker = "true";
//   }
// }
// if (checker == "false") {
//   alert("Not Found");
// }
//}
function del(value) {
  let dol;
  dol = document.getElementById(`num${value}`);
  myList = document.getElementById(`task_list`);
  let del = document.getElementById(`li_n${value}`);
  console.log(dol.value - 1, li_n);
  del.parentElement.remove();
  //localStorage.removeItem(localStorage.key(value));
  JSON.parse(localStorage.removeItem(`todos${value - 1}`));
  // --i;
  // return;
}
li_n++;
