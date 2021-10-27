/*
 * Title: Minimal Todo App
 * Description: This js file has all the functions to control the Todo App.
 * Author: Sabbir Zzaman
 * Date: 25-10-21
 */

// Select All Elements
let day = document.querySelector(".day h2");
let fullDate = document.querySelector(".full-date p");

let todo = document.querySelector(".todo");
let textInput = document.querySelector("#task-field");
let submitBtn = document.querySelector("#task-btn");
let text = document.querySelector("text");

// Date and Time
const d = new Date();

// Week days names
const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Month Names
const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sepr",
  "Oct",
  "Nov",
  "Dec",
];

// Get date and time
let todayName = dayNames[d.getDay()];
let thisMonth = monthNames[d.getMonth()];
let thisDate = d.getDate();
let thisYear = d.getFullYear();

day.innerHTML = todayName;
fullDate.innerHTML = `${thisMonth} ${thisDate}, ${thisYear}`;

// Event Linteners
submitBtn.addEventListener("click", addTodo); // Add TODO Text
todo.addEventListener("click", removeTodo); // Remove TODO text

// Function for adding text to the todo list
function addTodo(event) {
  // Prevent Default
  event.preventDefault();

  // Create TODO Elements
  let todoItem = document.createElement("div");
  let todoLabel = document.createElement("div");
  let todoInput = document.createElement("input");
  let todoContent = document.createElement("p");
  let removeBtn = document.createElement("button");

  // Add Classes, Ids, and Types
  todoItem.className = "todo-item";
  todoLabel.className = "todo-label";
  todoInput.className = "checked";
  removeBtn.className = "remove-btn";
  todoContent.className = "text";
  todoInput.type = "checkbox";

  // Elements Inner Text
  todoContent.innerHTML = textInput.value;
  removeBtn.innerHTML = "Remove";

  // Append Elements
  todoItem.appendChild(todoLabel);
  todoItem.appendChild(removeBtn);
  todoLabel.appendChild(todoInput);
  todoLabel.appendChild(todoContent);
  todo.appendChild(todoItem);

  // Clear input
  textInput.value = "";
}

// Function for removing text form the TODO list
function removeTodo(e) {
  const item = e.target;

  // Remove elements
  if (item.classList[0] === "remove-btn") {
    item.parentNode.remove();
  }

  // Mark as completed
  if (item.classList[0] === "checked") {
    completed = item.parentNode;
    completed.classList.toggle("completed");
  }
}