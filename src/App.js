import "./App.css";
import React, { useState } from "react";
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
      idOfScheduledDay: undefined,
    },
    {
      id: 2,
      project: "Project B",
      bgColor: "blue",
      startHour: 12,
      duration: 4,
      isScheduled: false,
      idOfScheduledDay: undefined,
    },
    {
      id: 3,
      project: "Project C",
      bgColor: "blue",
      startHour: 20,
      duration: 4,
      isScheduled: false,
      idOfScheduledDay: undefined,
    }
  ]);

  const days = [1, 2, 3, 4];
  const testCard = timeCards[0];
  const dayCards = timeCards;

  const updateCards = (e, card) => {
    e.preventDefault();
    setCards(() => [card]);
  };

  return (
    <div className="App container h-screen mt-10 box-border flex">
      <Projects timeCard={testCard} />
      {days.map(day => {
        const cards = dayCards.filter((card) => { return card.idOfScheduledDay == day });

        return <Day id={day} key={day} updateCards={updateCards} dayCards={cards} />
      })}
    </div>
  );
}

export default App;
