import React, { useState } from "react";
import { TimeDecks } from "./components/TimeDecks";
import { Schedule } from "./components/Schedule";
import { Dragover } from "./components/Dragover";
import './App.css'

function App() {

  return (
    <div className="App container h-screen mt-10 box-border flex flex-col ml-4">
      <TimeDecks />
      <Schedule />
      <Dragover />
    </div>
  );
}

export default App;
