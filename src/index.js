document.addEventListener("DOMContentLoaded", () => {
  //select the whole form and assign it to a variable
  let form = document.querySelector('form');
 //add an event listener to know when you submit the form
  form.addEventListener("submit", (e) => {
    //prevent the page from reloading every time you submit the form 
    e.preventDefault();
    //call buildToDo function and link it to the value 
    const priority = document.querySelector('#priority-select').value; // Get the selected priority
    buildToDo(e.target["new-task-description"].value, priority )
    // reset the form so that we can type in a new value after we've already submitted our message
    form.reset();
  })
});


// build To Do function (and include todo parameter)
// create a p tag 
// creat a button tag
// add an event listener so when you click on the x button, it refers to a function that deletes this button
// add text content in the button (x)
// add text content in the p tag - and link it back to the function parameter
//append x button to p tag
// append p tag as a child to the todo container

function buildToDo(todo, priority){
  let p = document.createElement('p');
  let btn = document.createElement('button');
  btn.addEventListener('click', handleDelete);
  btn.textContent = ' x ';
  p.textContent = `${todo} `;
  p.appendChild(btn)
  p.setAttribute('data-priority', priority); // Add a data-priority attribute
  document.querySelector('#tasks').appendChild(p)

  // Set text color based on priority
  if (priority === 'High') {
    p.style.color = 'red';
  } else if (priority === 'Medium') {
    p.style.color = 'yellow';
  } else if (priority === 'Low') {
    p.style.color = 'green';
  }
  sortTasks(); // Call the sorting function
}

function sortTasks() {
  const tasksContainer = document.querySelector('#tasks');
  const tasks = Array.from(tasksContainer.children);

  tasks.sort((a, b) => {
    const priorityA = a.getAttribute('data-priority');
    const priorityB = b.getAttribute('data-priority');
    const priorityOrder = { "High": 3, "Medium": 2, "Low": 1 };

    if (priorityOrder[priorityA] < priorityOrder[priorityB]) return 1;
    if (priorityOrder[priorityA] > priorityOrder[priorityB]) return -1;
    return 0;
  });

  tasks.forEach((task) => {
    tasksContainer.appendChild(task);
  });
}


//create the function that deletes the parent node of the event
function handleDelete(e) {
  e.target.parentNode.remove()
}


// If task is high/red, it should have attribute of red =>3
// yellow => 2
// green => 1
// if 3 >




