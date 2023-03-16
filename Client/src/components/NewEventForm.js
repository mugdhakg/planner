import { BrowserRouter, Router, Switch, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';


function NewEventForm() {
    console.log("Entering new event")
    const [event_id, setEvent_id] = useState("");
    const [event_name, setEvent_name] = useState("");
    const [event_date, setEvent_date] = useState("");
    const [event_time, setEvent_time] = useState("");
    const [message, setMessage] = useState("");

    let handleSubmit = async (e) => {
        console.log("Entered let")
        e.preventDefault();
        try {
            Axios.post("http://localhost:5000/newEvent", {
                "Slno": event_id,
                "Name": event_name,
                "date": event_date,
                "time": event_time,
            }).then((response) => {
                const res = response.data;
                console.log("This is res" + res);
                let resJson = res.json();
                if (res.status === 200) {
                    setEvent_id("");
                    setEvent_name("");
                    setEvent_date("");
                    setEvent_time("");
                    setMessage("Event created successfully");
                }
                else {
                    setMessage("Some error occured");
                }
            }).catch((error) => {
                console.error(error);
            });
        } catch (error) {
            console.log(error)
        };
    }

        console.log("Before html return");

        return (
            <div className="addEvent">
                <form onSubmit={handleSubmit}>
                    <input
                        type="number"
                        value={event_id}
                        placeholder="Sl. No."
                        onChange={(e) => setEvent_id(e.target.value)}
                    />
                    <input
                        type="text"
                        value={event_name}
                        placeholder="Name"
                        onChange={(e) => setEvent_name(e.target.value)}
                    />
                    <input
                        type="date"
                        value={event_date}
                        placeholder="Date"
                        onChange={(e) => setEvent_date(e.target.value)}
                    />
                    <input
                        type="time"
                        value={event_time}
                        placeholder="Time"
                        onChange={(e) => setEvent_time(e.target.value)}
                    />

                    <button type="submit">Create</button>

                    <div className="message">{message ? <p>{message}</p> : null}</div>
                </form>
            </div>
        );

}
export default NewEventForm;

/*
    const [selected, setSelected] = useState("");

<select
                        type="text"
                        value={selected}
                        placeholder="Select status"
                        onChange={(e) => setEvent_time(e.target.value)}>
                            <option value = "option 1">Yet to start</option>
                            <option value = "option 2">In progress</option>
                            <option value = "option 3">Finished</option>
                    </select>

    try {
        Axios.put("http://localhost:5000/status", {
            "selectedOption": selected,
        }).then((response) => {
            const res = response.data;
            console.log("This is res" + res);
            let resJson = res.json();
            if (res.status === 200) {
                setEvent_id("");
                setEvent_name("");
                setEvent_date("");
                setEvent_time("");
                setMessage("Event created successfully");
            }
            else {
                setMessage("Some error occured");
            }
        }).catch((error) => {
            console.error(error);
        });
    } catch (error) {
        console.log(error)
    };*/