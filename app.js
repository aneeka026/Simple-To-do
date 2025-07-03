let btn = document.querySelector(".input-group button");
let input = document.querySelector(".input-group input");
let ul = document.querySelector("ul");

// Add new task on clicking Add button
btn.addEventListener("click", function () {
  if (input.value.trim() === "") return; // Do not add empty tasks

  let item = document.createElement("li");
  item.innerText = input.value; //add input value into item

  let delBtn = document.createElement("button");
  delBtn.innerText = "delete";
  delBtn.classList.add("delete");

  // Attach delete functionality to the new button
  delBtn.addEventListener("click", function () {
    let par = this.parentElement;
    par.remove();
  });

  item.appendChild(delBtn);

  ul.appendChild(item); //add item into ul
  input.value = ""; // after adding task make input field empty
});

// Attach delete functionality to existing delete buttons
let delBtns = document.querySelectorAll(".delete");
for (let delBtn of delBtns) {
  delBtn.addEventListener("click", function () {
    let par = this.parentElement;
    par.remove();
  });
}
