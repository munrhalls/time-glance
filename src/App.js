import React, { useState } from "react";
import { TimeDecks } from "./components/TimeDecks";
import { Schedule } from "./components/Schedule";
import { Dragover } from "./components/Dragover";
import './App.css'
import d from './d.png';

function App() {

  return (
    <div className="App">
      <TimeDecks />
      <Schedule />
      {/* <Dragover /> */}
    </div>
  );
}

export default App;
