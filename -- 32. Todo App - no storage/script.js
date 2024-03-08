//VARIABLES AND ELEMENTS
const input = document.querySelector("input");
const btn = document.querySelector("button");
const todoList = document.querySelector(".todo-list");
const clear = document.querySelector(".clear");

//FUNCTIONS
const addTask = (e) => {
  e.preventDefault()
  const newLi = document.createElement("li");
  const delBtn = document.createElement("button");

  delBtn.innerHTML = `<i class="fas fa-trash-alt"></i>`;

  if(input.value == "") return alert ("Please enter a task.")

  newLi.textContent = input.value;
  newLi.appendChild(delBtn);
  todoList.appendChild(newLi);
  input.value = "";

  delBtn.addEventListener("click",function(){
    const del = confirm("Are you sure?")
    del && this.parentNode.remove()
  })
}

const clearAll = () =>{
  todoList.innerHTML = "";
}

//EVENT LISTENERS
btn.addEventListener("click",addTask)
clear.addEventListener("click",clearAll)