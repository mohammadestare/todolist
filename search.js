const search = document.getElementById("search");
const search_icon = document.getElementById("searchicon");
search_icon.addEventListener("click", function searchh() {
  {
    search.value = localStorage.getItem("todos");
  }
});
