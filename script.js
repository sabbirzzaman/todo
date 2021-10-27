/*
 * Title: Minimal Todo App
 * Description: This js file has all the functions to control the Todo App.
 * Author: Sabbir Zzaman
 * Date: 25-10-21
 */

// Select Elements
let day = document.querySelector(".day h2");
let fullDate = document.querySelector(".full-date p");

let form = document.querySelector("form");
let textInput = document.querySelector("#task-field");
let submitBtn = document.querySelector("#task-btn");

let todo = document.querySelector(".todo");
let todoItem = document.querySelector(".todo-item");
let todoLabel = document.querySelector(".todo-label");
let todoChecked = document.getElementById("todo-checked");

// Date and Time
const d = new Date();

const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

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

let todayName = dayNames[d.getDay()];
let thisMonth = monthNames[d.getMonth()];
let thisDate = d.getDate();
let thisYear = d.getFullYear();

day.innerHTML = todayName;
fullDate.innerHTML = `${thisMonth} ${thisDate}, ${thisYear}`;

let todoElements = (task) => {
  let addTodoItem = document.createElement('div');
  let addTodoLabel = document.createElement('label');
  let addTodoInput = document.createElement('input');
  let addTodoContent = document.createElement('p');

  addTodoItem.className = 'todo-item';
  addTodoLabel.className = 'todo-label';
  addTodoInput.type = 'checkbox';
  addTodoInput.setAttribute('id', 'todo-checked');
  addTodoContent.innerHTML = task;

  addTodoItem.appendChild(addTodoLabel);
  addTodoLabel.appendChild(addTodoInput);
  addTodoLabel.appendChild(addTodoContent);

  return addTodoItem;
}

console.log(textInput.value);