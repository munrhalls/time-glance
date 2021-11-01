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

  const updateCards = (e, card, dayWidth)  => {
    e.preventDefault();
    
    const dropCoordX = e.clientX;
    const hourWidth = dayWidth / 24;
    const startHour = Number(Math.floor(dropCoordX/hourWidth));
    console.log(startHour)
    
    setCards(() => [
      {
        id: 1,
        project: "Project A",
        bgColor: "blue",
        startHour: startHour,
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
