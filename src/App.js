import React, { useState } from "react";
import { TimeDecks } from "./components/TimeDecks";
import { Schedule } from "./components/Schedule";
import Dragover from "./components/Dragover";

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
      duration: 8,
      isScheduled: false,
      idOfScheduledDay: undefined,
    },
    {
      id: 3,
      project: "Project C",
      bgColor: "blue",
      startHour: 20,
      duration: 12,
      isScheduled: false,
      idOfScheduledDay: undefined,
    }
  ]);

  const updateCards = (e, updatedCard) => {
    setCards(() => timeCards.map(card => {
      if (card.id === updatedCard.id) {
        return updatedCard;
      }
      return card;
    }));
  };



  return (
    <div className="App container h-screen mt-10 box-border flex flex-col ml-4">
      <TimeDecks />
      <Schedule />
      <Dragover />
    </div>
  );
}

export default App;
