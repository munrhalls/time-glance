import "./App.css";
import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Day from "./components/Day";
import Days from "./components/Days";
import TimeCard from "./components/TimeCard";

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
      bgColor: "brown",
      startHour: 8,
      duration: 4,
      isScheduled: false,
      scheduledDayId: undefined,
    },
    {
      id: 3,
      project: "Project C",
      bgColor: "orange",
      startHour: 16,
      duration: 4,
      isScheduled: false,
      scheduledDayId: undefined,
    }
  ]);
  // object: id, project, bgColor, startHour, duration, isScheduled, scheduledDayId

  const testCard = timeCards[0];
  const dayCards = timeCards;

  const updateCards = (e, card) => {
    e.preventDefault();
    setCards(() => [
      {
        id: 1,
        project: "Project A",
        bgColor: "blue",
        startHour: 0,
        duration: 12,
        isScheduled: false,
        scheduledDayId: undefined,
      },
      {
        id: 2,
        project: "Project B",
        bgColor: "purple",
        startHour: 14,
        duration: 1,
        isScheduled: false,
        scheduledDayId: undefined,
      },
      {
        id: 3,
        project: "Project C",
        bgColor: "orange",
        startHour: 15,
        duration: 4,
        isScheduled: false,
        scheduledDayId: undefined,
      }
    ]);
  };

  return (
    <div className="App container h-screen box-border">
      <TimeCard card={testCard} />
      <Day updateCards={updateCards} dayCards={dayCards} />
    </div>
  );
}

export default App;
