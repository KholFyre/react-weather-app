import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App () {
  return (
    <div className="App">
        <div className="Container">
      <Weather defaultCity="New York"/>
    <footer>
      This project was coded by <a href="https://www.linkedin.com/in/rachel-dyer-b1681457/" rel="noreferrer" target="_blank"  > Rachel Dyer</a> 
    . It is {""}
    <a href="https://github.com/KholFyre/react-weather-app" rel="noreferrer" target="_blank"> open-sourced on Github </a> 
          and {""}
    <a href="https://upbeat-keller-b82650.netlify.app/" rel="noreferrer" target="_blank"> hosted on Netlify. </a> <br/>
    Background photo by Egor Myznik on <a href="https://unsplash.com/@vonshnauzer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" 
    rel="noreferrer" target="_blank" >Unsplash. </a>
    
    </footer>
    </div>
    </div>
  );
}