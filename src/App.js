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
    {
      id: 2,
      project: "Project B",
      bgColor: "blue",
      startHour: 12,
      duration: 4,
      isScheduled: false,
      scheduledDayId: undefined,
    },
    {
      id: 3,
      project: "Project C",
      bgColor: "blue",
      startHour: 20,
      duration: 4,
      isScheduled: false,
      scheduledDayId: undefined,
    }
  ]);
  // object: id, project, bgColor, startHour, duration, isScheduled, scheduledDayId

  const days = [0, 1, 2, 3, 4];
  const testCard = timeCards[0];
  const dayCards = timeCards;

  const updateCards = (e, card) => {
    e.preventDefault();
    setCards(() => [card]);
  };

  return (
    <div className="App container h-screen mt-10 box-border">
      <Projects timeCard={testCard} />
      {days.map(day => {
        return <Day id={1} key={day} updateCards={updateCards} dayCards={dayCards} />
      })}
    </div>
  );
}

export default App;
