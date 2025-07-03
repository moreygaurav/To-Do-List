// ----- DOM nodes -----
const taskInput  = document.getElementById('task-input');
const taskList   = document.getElementById('task-list');
const todoForm   = document.getElementById('todo-form');

// ----- Helpers -----
function saveData() {
  localStorage.setItem('todo-data', taskList.innerHTML);
}

function restoreData() {
  const data = localStorage.getItem('todo-data');
  if (data) taskList.innerHTML = data;
}

// ----- Add task -----
function addTask(e) {
  e.preventDefault();
  const text = taskInput.value.trim();
  if (!text) {
    alert('Please enter a task');
    return;
  }

  const li   = document.createElement('li');
  li.textContent = text;

  // delete button (span)
  const del  = document.createElement('span');
  del.textContent = '✕';
  del.classList.add('delete');
  li.appendChild(del);

  taskList.appendChild(li);
  saveData();
  taskInput.value = '';
}

// ----- Toggle / delete -----
function handleListClick(e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
    saveData();
  } else if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
    saveData();
  }
}

// ----- Events -----
todoForm.addEventListener('submit', addTask);
taskList.addEventListener('click', handleListClick);

// ----- Init -----
restoreData();
