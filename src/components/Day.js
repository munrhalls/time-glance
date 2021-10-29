import React from "react";

function Day(props) {
  const handleDrop = (e) => {
    e.preventDefault();
    const cardId = e.dataTransfer.getData("cardId");

    // component App contains state of all cards

    // basic idea - when card is added to a project, state of cards updates
    // basic idea - when card is dragged & dropped to a day, state of cards updates
    // basic idea - anywhere where anything changes about cards in any way, it is updated via state of all cards and nothing else

    //// App code lines

    //// MOCK CARD OBJECTS
    // Mock data is array of 5 objects, each object is a card
    //// ALL CARDS STATE HOOK
    // App has state of all cards hook
    // hook consists of state of all cards variable, state of all cards update method, state of all cards array
    // each card object consists of card id, card's project location, card's color, card's period starting hour num, card's period size, card's isScheduled status, card's day location
    // variable scheduleCards is all cards filtered for isOnSchedule status set to true

    // MOCK DAYS DATA
    // variable days (later it'll be all days in the year, tree object) is mock of 7 days data in the app
    // it's an array of objects
    // each object is of fields: id, year, month, week, number, name, available hour blocks sizes, cards

    // DAYS COMPONENT
    // writing component Days (not calendar because I can re-arrange days however I want, instead of a big macro block that is managing smaller parts)
    // Days receives props: scheduleCards, days data
    // (Days have nothing to do with cards)

    // DAYS COMPONENT
    // Days maps days data to create Day component
    // On each iteration, filtering scheduleCards
    // the condition is matching day id and card's day location id
    // dayScheduleCards variable
    // it's getting the array of matching scheduleCards

    // Day component receives props: dayScheduleCards, availablePeriodsLeft, day number, day name
    // Day component takes form of a square
    // Day component displays Month name, Number and day Name in the top left area

    //// Display scheduleCards from props in a day
    // Day maps array of length 24
    // on each iteration, day returns HourColumn component
    // HourColumn receives props: num, isAvailable, isAfterDragOut

    // Day has a hook with state
    // the state is dayCards
    // dayCards is array of card objects
    // DayTimeCard component is created
    // map dayCards
    // each iteration returns DayTimeCard
    // DayTimeCard receives props: dayCard, HourColumnWidth
    // DayTimeCard displays dayCard's period duration number
    // DayTimeCard bg color is dayCard's bg color, height is full vertical height available
    // DayTimeCard accesses dayCard's period duration number
    // DayTimeCard variable width is assigned duration number * HourColumnWidth
    // DayTimeCard, via Tailwind CSS, takes width of the width variable
    // DayTimeCard, accesses dayCards period start number
    // DayTimeCard is position absolute and positionLeft variable equals HourColumnWidth * period start number
    // DayTimeCard z-index is 3, while  Highlighting box's is 2, while HourColumn's is 1

    //// HourColumn component
    // Each column is segmented into two vertical divs
    // First div is long, bg white
    // Second div is short
    // Second div is black bg, white color and contains number

    //// DragOver highlighting, green and red based on temporal availability
    // method detecting dragOver event
    // method accessing dragOver event's data
    // hook's state updating method for highlightingBox
    // new hook that is object of these 4 properties
    // HighlightingBox component in a new file
    // is importing it to Day component
    // it receives props: isShown, width, positionLeft, bgColor
    // left of the dragged card
    // is checked, determined, selected
    // it's number is accessed
    // width of HourColumn width * number is assigned to variable cardWidth
    // box, full height

    //// PASSING VIA PROPS, CARDS STATE CHANGE DETECTION METHODS + WITHIN THESE ARE ALL CARD'S STATE-UPDATING HOOK METHODS
    // drag & drop works via hook passed down in props
    // this hook takes event data - day's id and card's id
    // passes it upwards, method in App receives day's id
    // hook's update method maps state of all cards
    // if card card's id and card's day location id, match day's id
    // this iteration is returned inside conditional
    // now this card, instead of empty day's location
    // has a day's id inside its day's location field
    // and that's returned in that iteration as such
    // state of all cards has a method that filters all cards by their isScheduled status
    // all cards that are true for isScheduled, are assigned to a variable scheduledCards

    const card = document.getElementById(cardId);
    card.style.display = "block";
    e.target.appendChild(card);
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      id={props.id}
      className={props.className}
      onDrop={handleDrop}
      onDragOver={dragOver}
    >
      {props.children}
    </div>
  );
}

export default Day;
