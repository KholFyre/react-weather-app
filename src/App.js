import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App () {
  return (
    <div className="App">
        <div className="Container">
      <Weather defaultCity="New York"/>
    <footer>
      This project was coded by <a href="https://www.linkedin.com/in/rachel-dyer-b1681457/" rel="noreferrer" target="_blank"> Rachel Dyer </a> and is {""}
    <a href="https://github.com/KholFyre/react-weather-app" rel="noreferrer" target="_blank">
    open-sourced on Github.
    
    </a>
    </footer>
    </div>
    </div>
  );
}