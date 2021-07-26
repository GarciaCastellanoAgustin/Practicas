// Tasks

document.getElementById('formTask').addEventListener('submit', saveTask);

function saveTask(e) {
  let title = document.getElementById('title').value;
  let description = document.getElementById('description').value;
  console.log(description)

  let task = {
    title,
    description
  };

  if(localStorage.getItem('tasks') === null) {
    let tasks = [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  } else {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  e.preventDefault();
  document.getElementById("formTask").reset();
  getTasks();
}

function getTasks() {
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  let tasksView = document.getElementById('tasks');
  tasksView.innerHTML = '';
  for(let i = 0; i < tasks.length; i++) {
    let title = tasks[i].title;
    let description = tasks[i].description;

    tasksView.innerHTML += 
    
  `<div class="card mb-3">
      <h3 class="fw-bold my-3 mx-3">${title}</h3>
      <ul class="list-unstyled">
        <li>
          <ul class="list-inline mx-3">
            <li class="list-inline-item me-3"><p class="lead mb-2">${description}</p></li>
            <li class="list-inline-item me-3"><a href="#" class="btn btn-secondary justify-content-center mb-2" onclick="deleteTask('${title}')">Delete</a></li>
          </ul>
        </li>
      </ul>
    </div>`
      ;
  }
}

function deleteTask(title) {
  console.log(title)
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  for(let i = 0; i < tasks.length; i++) {
    if(tasks[i].title == title) {
      tasks.splice(i, 1);
    }
  }
  
  localStorage.setItem('tasks', JSON.stringify(tasks));
  getTasks();
}

getTasks();

// Clock

(function(){

let timeUpdate = function(){
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let day = date.getDay();
  let dayOfTheMonth = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();

   let liHours = document.getElementById("hour");
   let liMinutes = document.getElementById("minutes");
   let liDay = document.getElementById("dayOfTheWeek");
   let liDate = document.getElementById("dateNumbrer");
   let liMonth = document.getElementById("month");
   let liYear = document.getElementById("year");

    let week = ['Sunday' , 'Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday' ]
    liDay.textContent = week[day];

    liDate.textContent = dayOfTheMonth;

    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    liMonth.textContent = months[month];

    liYear.textContent = year;
    liHours.textContent = hours;
    liMinutes.textContent = minutes;

    if (minutes < 10) {
      minutes = "0" + minutes
    };
};

timeUpdate();
let update = setInterval(timeUpdate, 1000)

}())