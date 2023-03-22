import { Link, BrowserRouter, Route, Switch, useHistory, useEffect, useState } from 'react-router-dom';
import './Style.css';

function MyToDo () {
    return (
        <div>
            <nav className="navbar">
            <ul className="nav-links">
              <p id="one">Planner</p>
              <Link to="/Dashboard">
                <li>Dashboard</li>
              </Link>
              <Link to="/MyEvents">
                <li>My Events</li>
              </Link>
              <Link to="/MyToDo">
                <li>My To-Do</li>
              </Link>
              <Link to="/MyNotes">
                <li>My Notes</li>
              </Link>
              <Link to="/Logout">
                <li>Logout</li>
              </Link>
            </ul>
          </nav>
          <div id="myDIV" className="header">
            <h2>To Do</h2>
          </div>
          <ul id="myUL">
            <li className='myList'>Water the plants</li>
            <li className='myList'>Go on a run</li>
            <li className='myList'>Make web app design</li>
            <li className='myList'>Book movie tickets online</li>
          </ul>
          <div>
            <input type="text" id="myInput" placeholder="Title..."></input>
          </div>
          <div>
            <button onClick={newElement} className="addBtn">Add</button> 
          </div>
        </div>
    )
}

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
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


//<input type="text" id="myInput" placeholder="Add New Item..."></input>

/*        <div>
          <div className='todobox'>
            <h2>To Do</h2>
            <hr className='line'></hr>
            <button id='push'>Add New Item</button>
          </div>
        </div>     */

export default MyToDo;