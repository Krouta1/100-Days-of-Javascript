// VARIABLES AND ELEMENTS
const input = document.querySelector("input");
const btn = document.querySelector("button");
const todoList = document.querySelector(".todo-list");
const clear = document.querySelector(".clear");

// FUNCTIONS

const addTaskToLS = (task) => {
  let tasks = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

const displayTasks = () => {
  todoList.innerHTML = ""; // Clear the existing list before re-rendering

  const localTasks = JSON.parse(localStorage.getItem("tasks")) || [];

  localTasks.forEach((task) => {
    const newLi = document.createElement("li");
    const delBtn = document.createElement("button");

    delBtn.innerHTML = `<i class="fas fa-trash-alt"></i>`;
    newLi.textContent = task;
    newLi.appendChild(delBtn);
    todoList.appendChild(newLi);

    delBtn.addEventListener("click", function () {
      const del = confirm("Are you sure?");
      if (del) {
        const index = localTasks.indexOf(task);
        console.log(index)
        if (index !== -1) {
          localTasks.splice(index, 1);
          localStorage.setItem("tasks", JSON.stringify(localTasks));
          displayTasks(); // Update the displayed tasks after deletion
        }
      }
    });
  });
}

const addTask = (e) => {
  e.preventDefault();

  if (input.value === "") {
    alert("Please enter a task.");
    return;
  }

  addTaskToLS(input.value);
  displayTasks();
  input.value = ""; // Clear the input after adding the task
}

const clearAll = () => {
  localStorage.removeItem("tasks");
  displayTasks();
}

// EVENT LISTENERS
btn.addEventListener("click", addTask);
clear.addEventListener("click", clearAll);

// Display tasks when the page loads
document.addEventListener("DOMContentLoaded", displayTasks);
