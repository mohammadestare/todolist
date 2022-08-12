//
//
//

function createLielement(task) {
  const color = {};
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
{
  /* <p class="pl">${task.category}</h3>
                      <p class="pl">${task.time}</p>
                      <p class="pl">${task.date}</p> */
}
window.onload = () => {
  tasks = JSON.parse(localStorage.getItem("todos"));
  const task_list = document.querySelector("#task_list");
  tasks.forEach(function (task) {
    task_list.appendChild(createLielement(task));
  });
};
