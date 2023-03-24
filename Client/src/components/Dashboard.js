import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Router, Switch, Route, Link } from 'react-router-dom';
import { useHistory, useEffect, useState } from 'react-router-dom';
import './Style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';


console.log("Dashboard component is routed correctly.")

function Dashboard() {
  const history = useHistory();

  const openForm = () => {
    //const history = useHistory();
    history.push('./NewEventForm');
  }
  getData();

    return (
      <div>
        <BrowserRouter>
          <nav className="navbar">
            <p id="one">PLANNER</p>
            <hr></hr>
            <ul className="nav-links">  
              <Link to="/Dashboard">
                <FontAwesomeIcon icon={ faHome } className="icon"></FontAwesomeIcon>
                <li>Dashboard</li>
              </Link>
              <Link to="/NewEventForm">
                <FontAwesomeIcon icon={ faCalendar } className="icon"></FontAwesomeIcon>
                <li>Create New Event</li>
              </Link>
              <Link to="/">
                <FontAwesomeIcon icon={ faSignOut } className="icon"></FontAwesomeIcon>
                <li>Logout</li>
              </Link>
            </ul>
          </nav>
          <div className='banner'>

          </div>
          <div className="eventCard">
            <div>
              <p className='three'>My Events List</p>
              <table className="my-table">
              <thead id="table_head">
              <tr>
                <th>EVENT ID</th>
                <th>EVENT NAME</th>
                <th>EVENT DATE</th>
                <th>EVENT TIME</th>
              </tr>
              </thead>
              <tbody id="table_body">
              </tbody>
              </table>  
              <button className="buttonOne" onClick={openForm}>Add new event!</button>
            </div>
          </div>
            <div className="todoCard">
              <div id="myDIV" className="header">
                <p className='four'>To Do</p>
                <hr className='line'></hr>
              </div>
              <ul id="myUL">
                <li id="myUL">Water the plants</li>
                <li id="myUL">Go on a run</li>
                <li id="myUL">Make web app design</li>
                <li id="myUL">Book movie tickets online</li>
              </ul>
              <div>
                <hr className='five'></hr>
                <input type="text" id="myInput" placeholder="New To-do..."></input>
                <div onClick={newElement} className="addBtn">Add</div> 
              </div>
            </div>
        </BrowserRouter>
      </div>
    );
  }

  function getData() {
    fetch("http://localhost:5000/load").then((data) => {
      console.log(data);
      return data.json();
    }).then((objectData) => {
      console.log(objectData[0].event_id);
      let tableData = "";
      objectData.map((values) => {
        tableData += ` <tr>
      <td>${values.event_id}</td>
      <td>${values.event_name}</td>
      <td>${values.event_date}</td>
      <td>${values.event_time}</td>
      </tr>`
      });
      document.getElementById("table_body").innerHTML = tableData;
    }).catch((err) => {
      console.log(err);
    })
  }
  

var myNodelist = document.getElementsByTagName("LI");
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
  
  var k;
  for (k = 0; k < close.length; k++) {
    close[k].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

export default Dashboard;

/** <div className='card1'>
              <h3 className='two'>My Events</h3>
              <p className='two'>5</p>
            </div>
            <div className='card2'>
              <h3 className='two'>To-Do</h3>
              <p className='two'>5</p>
            </div>
            <div className='card3'>
              <h3 className='two'>Notes</h3>
              <p className='two'>5</p>
            </div>
            <div className='card4'>
              <h3 className='two'>One More</h3>
              <p className='two'>5</p>
            </div>   */