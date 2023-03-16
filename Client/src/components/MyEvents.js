import { Link, BrowserRouter, Route, Switch, useHistory, useEffect, useState } from 'react-router-dom';
import Login from './Login';
import { authenticated } from './Login';
import NewEventForm from './NewEventForm';
import './Style.css';

function MyEvents() {
  console.log("Value in authenticated is: " +authenticated);
  const history = useHistory();

  const openForm = () => {
    //const history = useHistory();
    history.push('./NewEventForm');
  }
  if (authenticated) {
    getData();
    return (
      <div>
      <h1>My Events List</h1>
      <BrowserRouter>
        <table className="my-table">
          <thead id="table_head">
            <tr>
              <th>Event ID</th>
              <th>Event Name</th>
              <th>Event Date</th>
              <th>Event Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody id="table_body">
          </tbody>
        </table>
        <button onClick={openForm}>Add new event!</button>
      </BrowserRouter>
      </div>
      );
    }
  else {
    history.push('./'); 
  }
  
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
    <td>${values.status}</td>
    </tr>`
    });
    document.getElementById("table_body").innerHTML = tableData;
  }).catch((err) => {
    console.log(err);
  })
}


export default MyEvents;