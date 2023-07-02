const todoInput = document.getElementById("todo-input");
const listContainer = document.getElementById("list-container");
const lightModeToggle = document.getElementById('light-mode-toggle');
const icon =lightModeToggle.querySelector('img');



function addTask(){
    if(todoInput.value === ''){
        alert("You must write something!");// input field cannot be empty!
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = todoInput.value;
        listContainer.appendChild(li);        
    }
    todoInput.value = "";
    saveData();
}

listContainer.addEventListener("click", function (e) {
  const listItem = e.target;
  listItem.classList.toggle("checked");
  saveData();
});


let isDoubleClick = false;

listContainer.addEventListener("mousedown", function (e) {
  if (!isDoubleClick) {
    isDoubleClick = true;
    setTimeout(function () {
      isDoubleClick = false;
      saveData();
    }, 300); // Adjust the delay as needed
  } else {
    const listItem = e.target;
    listItem.remove();
    saveData();
  }
});


function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

lightModeToggle.addEventListener('click', function(){
    document.body.classList.toggle('ligt-mode');
});



 
 

/*from here*/
function myFunction() {
  var button = document.querySelector('.toggle-button');
  var image = button.querySelector('img');
  var body = document.querySelector('body');

  if (image.src.endsWith('icon-moon.svg')) {
    image.src =  'images/icon-sun.svg';
    
  } else {
    image.src = 'images/icon-moon.svg';
    
  }
}
