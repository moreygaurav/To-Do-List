let task = document.getElementById("task");
let taskList = document.querySelector(".task-list");

function addTask() {
  let newTask = task.ariaValueMax;
  if ((newTask = "")) {
    let li = document.createElement("li");
    li.innerHTML = newTask;
    let span = document.createElement("span");
    span.innerHTML = " ❌";
    li.appendChild(span);
    taskList.appendChild(li);
    console.log(newTask);
  } else {
    alert("Enter A Task");
  }
  saveData();
  task.value = "";
}

taskList.addEventListener(
  "click",
  function (event) {
    if (event.target.tagName == "Li") {
      event.target.classList.toggle("checked");
      saveData();
      console.log("clicked on li tag ");
    } else if (event.target.tagName == "SPAN") {
      // event.target;
      saveData();
      console.log("clicked on cross");
    }
  },
  false
);

function saveData() {
    localStorage.setItem("data",taskList.innerHTML);
}
function fetchData() {
    localStorage.getItem("data");
}
fetchData();