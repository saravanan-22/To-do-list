// Element Calling
let addBtn = document.querySelector("button");
let textInput = document.getElementById("textinput");

addBtn.addEventListener("click", () => {
  let inputValue = textInput.value;
  if (inputValue !== "") {
    let toDoList = document.querySelector("#Todo");
    let newElement = document.createElement("li");
    newElement.innerHTML = `<article id="delete">
    <section class="d-flex justify-content-between flex-wrap my-2" > <div class = "mt-3"><input type="checkbox"class="form-check-input mx-3">
      <span>${inputValue}</span> </div> 
      <div class="me-3"><button class="editBtn btn d-block ms-2 btn  btn-outline-success p-1 border-0 ">Edit</button>
      <button class="deleteBtn btn  btn-outline-danger border-0 p-1">Delete</button></div></section><hr></article>
      `;
    toDoList.insertAdjacentElement("afterend", newElement);
    textInput.value = "";
    let editBtn = newElement.querySelector(".editBtn");
    let spanElement = newElement.querySelector("span");

    editBtn.addEventListener("click", () => {
      spanElement.setAttribute("contenteditable", true);
      spanElement.focus();
    });

    let deleteBtn = document.querySelector(".deleteBtn");
    let deleteSection = document.querySelector("#delete");
    deleteBtn.addEventListener("click", () => {
      deleteSection.remove();
    });

    let checkBox = document.querySelector(".form-check-input");
    let completedList = document.querySelector("#Completed");

    checkBox.addEventListener("click", () => {
      if (checkBox.checked) {
        let completedItem = newElement.cloneNode(true);
        completedItem.querySelector("span").style.textDecoration =
          "line-through";
        completedList.appendChild(completedItem);
        newElement.remove();

        let deleteBtn = document.querySelector(".deleteBtn");
        let deleteSection = document.querySelector("#delete");
        deleteBtn.addEventListener("click", () => {
          deleteSection.remove();
        });
      } else {
        let todoItem = newElement.cloneNode(true);
        todoItem.querySelector("span").style.textDecoration = "none";
        toDoList.appendChild(newElement);
        completedList.removeChild(newElement);
      }
    });
  }
});
