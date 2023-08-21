// src/App.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PlayersList from "./component/Playerslist";
import NavScrollExample from "./component/navBar";
import BasicExample from "./component/form";
import BrandExample from "./component/footer";

function App() {
  return (
    <div className="App">
      <NavScrollExample />
      <div className="text-center pt-2">
        <h2>Welcome To notRED.com</h2>
        <h4>Home of passionate football lovers and gamblers</h4>
        <hr></hr>
      </div>
      <h5 className="text-center pt-2">
        Here a list of this weeks football players
      </h5>
      <PlayersList />
      <BasicExample />
      <BrandExample />
    </div>
  );
}

export default App;
