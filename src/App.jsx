import React from "react";
import "./App.css";

function Employee(props) {
  return (
    <div className="box">
      <img
        className="employee-photo"
        src={props.photo}
        alt={props.name}
      />

      <h2>{props.name}</h2>

      <p>
        <strong>Employee ID:</strong> {props.id}
      </p>

      <p>
        <strong>Department:</strong> {props.dept}
      </p>

      <p>
        <strong>Designation:</strong> {props.job}
      </p>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <h1>Employee Directory Portal</h1>
      <p className="subtitle">Employee Information System</p>

      <div className="employee-list">
        <Employee
          name="rahul"
          id="2500010080"
          dept="biotechnology"
          job="reasearcher"
          photo="https://placehold.co/120x120/png?text=Rahul"
        />

        <Employee
          name="priya"
          id="2400010080"
          dept="cse"
          job="Developer"
          photo="https://placehold.co/120x120/png?text=Priya"
        />

        <Employee
          name="arjun"
          id="2500010077"
          dept="ECE"
          job="System Analyst"
          photo="https://placehold.co/120x120/png?text=Arjun"
        />
      </div>
    </div>
  );
}

export default App;