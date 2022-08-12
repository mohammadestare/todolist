//
//
//

function createLielement(task) {
  const node = document.createElement("li");
  node.innerHTML = `<div>
                      <img src="asse/edit.png" class="edit in" />
                      <h3 class="in">${task.text}</h3>
                      <p class="pl">${task.category}</h3>
                      <p class="pl">${task.time}</p>
                      <p class="pl">${task.date}</p>
                   </div>`;
  return node;
}

window.onload = () => {
  tasks = JSON.parse(localStorage.getItem("todos"));
  const task_list = document.querySelector("#task_list");
  tasks.forEach(function (task) {
    task_list.appendChild(createLielement(task));
  });
};
