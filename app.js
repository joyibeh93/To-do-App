
// Create a "close" button and append it to each list item
let myNodelist = document.getElementsByTagName("LI");
let i;
for (i = 0; i < myNodelist.length; i++) {
  let span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");
let x;
for (x = 0; x < close.length; x++) {
  close[x].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
let toDoLists =[];

function newElement() {
  localStorage.setItem('todoItemsRef', JSON.stringify(toDoLists));
  let li = document.createElement("li");
  let inputValue = document.getElementById("myInput").value;
  let task = document.createTextNode(inputValue);
  li.appendChild(task);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").insertBefore(li, document.getElementById("myUL").childNodes[0])
  }
  // console.log(toToLists.push(localStorage.getItem('value')));
  toDoLists.push(myInput.value);
  document.getElementById("myInput").value = "";

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
// document.addEventListener('DOMContentLoaded', () => {
//   const ref = localStorage.getItem('todoItemsRef');
//   if (ref) {
//     toDoLists = JSON.parse(ref);
//     toDoLists.forEach(task => {
//       newElement();
//     });
//   }
// });
