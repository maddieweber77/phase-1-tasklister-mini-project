document.addEventListener("DOMContentLoaded", () => {
  //select the whole form and assign it to a variable
  let form = document.querySelector('form');
 //add an event listener to know when you submit the form
  form.addEventListener("submit", (e) => {
    //prevent the page from reloading every time you submit the form 
    e.preventDefault();
    //call buildToDo function and link it to the value 
    //buildToDo(e.target.new-task-description.value)
    buildToDo(e.target["new-task-description"].value)
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

function buildToDo(todo){
  let p = document.createElement('p');
  let btn = document.createElement('button');
  btn.addEventListener('click', handleDelete);
  btn.textContent = ' x ';
  p.textContent = `${todo} `;
  p.appendChild(btn)
  document.querySelector('#tasks').appendChild(p)
}

function handleDelete(e) {
  e.target.parentNode.remove()
}




//create the function that deletes the parent node of the event


