// import meeting from "./meeting.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [username, setUsername] = useState("");
  const [stime,setStartTime] = useState(""); 
  const zoomMeeting = () => {
    const data = {
      email: "mihirsahai01@gmail.com",
    };
    console.log(username);
    axios
      .post(`http://localhost:3444/meeting`, data)
      .then((response) => {
        let URL =
          response.data.join_url.replaceAll(
            "https://us04web.zoom.us/j/",
            "http://localhost:9999/?"
          ) + `?role=1?name=${username}`;
        console.log(URL);
        window.location.replace(`${URL}`);
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="App">
      <header className="App-header">
        {/* <Student /> */}
        <h1>Zoom meeting link generation form</h1>
        
        <div className="card" style={{justifyContent: "space-around"}}>
          <div class="para">
            Dear User, You can fill your name and time for online zoom meeting in the form below and generate a meeting link. This generated meeting link uses this netlify/vercel url and NOT a zoom URL. Also the meeting link opens meeting inside this netlify/vercel website and not on zoom website.
          </div>
          <h5>
            Name&nbsp;&nbsp;
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              style={{
                width: "300px",
                borderRadius: "5px",
                padding: "8px 12px",
                fontSize: "18px",
              }}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </h5>
          <h5>
            Start Time&nbsp;&nbsp;
            <input
              type="text"
              name="time"
              placeholder="In 24hr format"
              style={{
                width: "260px",
                borderRadius: "5px",
                padding: "8px 12px",
                fontSize: "18px",
              }}
              value={stime}
              onChange={(e) => setStartTime(e.target.value)}
            />
          </h5>

          <div className="row" >
                <button
                  className="btn btn-info"
                  style={{
                    width: "290px",
                    height: "80px",
                    fontSize: "20px",
                    fontFamily: "cursive",
                    alignItems: "center"
                  }}
                  onClick={zoomMeeting}
                >
                Create Meeting
                </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
