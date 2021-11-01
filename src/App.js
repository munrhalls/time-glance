import "./App.css";
import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Day from "./components/Day";
import Days from "./components/Days";
import Projects from "./components/Projects";

function App() {
  const [timeCards, setCards] = useState([
    {
      id: 1,
      project: "Project A",
      bgColor: "blue",
      startHour: 0,
      duration: 4,
      isScheduled: false,
      scheduledDayId: undefined,
    },
  ]);
  // object: id, project, bgColor, startHour, duration, isScheduled, scheduledDayId

  const testCard = timeCards[0];
  const dayCards = timeCards;

  const updateCards = (e, card, dayWidth) => {
    e.preventDefault();
    const dropDistanceFromLeft = e.clientX;
    // e.clientX distance in hour units
    // console.log(e.clientX)
    console.log(Math.floor(e.clientX))
    // day's width / distance from the left, round to min
    // transpose it onto hours format

    // accurately establish which hour the drop is attempted on
    // check how many hours are required to the right
    // check if they are available
    
    setCards(() => [
      {
        id: 1,
        project: "Project A",
        bgColor: "blue",
        startHour: 8,
        duration: 4,
        isScheduled: false,
        scheduledDayId: undefined,
      },
    ]);
  };

  return (
    <div className="App container h-screen mt-10 box-border">
      <Projects timeCard={testCard} />
      <Day updateCards={updateCards} dayCards={dayCards} />
    </div>
  );
}

export default App;
