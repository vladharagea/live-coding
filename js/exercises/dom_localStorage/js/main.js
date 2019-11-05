let input = document.getElementById("input");
let list = document.querySelector(".list-container");

let myItems =
  localStorage.getItem("todo") == null
    ? []
    : JSON.parse(localStorage.getItem("todo"));

addListItem = item => {
  let p = document.createElement("p");
  p.innerHTML = item;
  list.appendChild(p);
};

updateList = item => {
  addListItem(item);
  input.value = "";
  myItems.push(item);
  localStorage.setItem("todo", JSON.stringify(myItems));
};

myItems.forEach(el => {
  addListItem(el);
});

input.onkeydown = e => {
  if (e.key === "Enter") {
    let text = input.value;
    updateList(text);
  }
};
