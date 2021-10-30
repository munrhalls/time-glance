import "./App.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Day from "./components/Day";
import Card from "./components/Card";

function App() {
      // component App contains state of all cards

    // basic idea - when card is added to a project, state of cards updates
    // basic idea - when card is dragged & dropped to a day, state of cards updates
    // basic idea - anywhere where anything changes about cards in any way, it is updated via state of all cards and nothing else

    //// App code lines

    // WRITING ((FILE + COMPONENT STARTER) + IMPORT) FOR ALL APP'S COMPONENTS
    // entire files tree + starter code + imports are complete

    //// APP - MOCK CARDS DATA
    // Mock data: 5 objects, each is card
    // object: id, project, color, startHour, duration, isScheduled, scheduledDayId

    //// APP - ALL CARDS STATE HOOK
    // App - all cards everywhere & anywhere state hook
    // one cards state, one update method
    // mock data in state

    // APP - PREPARE PROP FOR DAYS COMPONENT - SCHEDULE CARDS
    // variable scheduledCards - filtering all cards for isScheduled

    // APP - MOCK DAYS DATA
    // variable days - mock of 7 days data
    // array, each object: id, year, month,  week, number, name, dayScheduledCards

    // APP - DAYS COMPONENT
    // component Days (nothing to do with cards) (not calendar, can derive everything for calendar from days data)
    // Days props: updateCardInDay, scheduledCards, days data

    // DAYS - MAPPING DAYS DATA - CREATING COLLECTION OF DAY COMPONENTS
    // variable days - retrieves days array
    // method map - maps days data to create list of Day components
    // retrieving props - scheduledCards
    // variable dayScheduledCards = filtering scheduledCards for match of card's scheduledDayId and day's id
    // DAY PROPS - updateCardInDay, dayScheduledCards, day object
    // Days (plural, comp above) tailwindCSS - flex

    // DAY COMPONENT - INSIDE OF IT
    // Day tailwindCSS - a large enough, not too large, square with black border
    // Day from props - Month name, Number, day Name in the top left area, looking good
    // TailwindCSS

    // DAY - DISPLAYING SCHEDULED CARDS
    // variable dayWidth
    // variable hourWidth = dayWidth / 24
    // retrieve props - dayScheduledCards
    // MAP SCHEDULED CARDS
    // pass scheduledCard prop
    // SCHEDULED CARD - COMPONENT
    // retrieve props - startHour, duration, bgColor
    // cardWidth = hourWidth * duration
    // cardPositionLeft = hourWidth * startHour
    // tailwindCSS cardPositionLeft, width = cardWidth, height = full, bgColor = bgColor

    // DAY - ON DROP !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // first and foremost, nothing happens in the component except pass info to topmost level
    // it merely detects on drop event - uses method provided in props to pass data to topmost level - and as topmost level handles state update, it receives it via props and re-renders (altered movie slide)
    // now, what's interesting - this makes it that BOTH drag&drop from projects, and drag&drop from schedule area, work with this one functionality, they don't need different drag & drop stuff - and if I were to make a 1000000 of them, they could all use this one functionality
    // relevant factors
    
    // DAY - onDrop event listener
    // all that is needed here:  pass up card id, the calculated startHour & day.id
    // method - onDrop event listener
    // retrieve prop - updateCardInDay method (hook)
    // variable distanceToMidnight = get card, get .getBoundingClientRect stuff, get day's getBoundingClientRect stuff, calculate
    // variable startHour = distanceToMidnight/hourWidth, round to min
    // variable day.id
    // pass card's new scheduledDay: day.id (previously scheduledDay was empty or different id)
    
    // APP - UPDATE ALL CARDS STATE
    // method - updateCards
    // retrieve card id, calculated startHour, day.id
    // map all cards
    // get card id that matches variable card id 
    // modify it by the above variables 
    // in that iteration, return modified card
    // that's it, it should now update state, which should be passed all the way down to that specific day, which should re-render that specific day with that specific card
    // the drag & drop merely triggers a function in a specific place, which is fed upwards to update state, which passes new props, which re-renders that specific place accordingly
    // that's react
    
    


    

    // simple
    // not simple yet


    // hook's state availablePeriodsLeft = array of numbers
    // upon re-render from props, day has a method that calculates available space left
    // after the calculation, results are put into hook's state method
    // DAY's state for available periods numbers left, is updated
    // DAY re-renders again right after receiving new card props update, then calculates state change based on props, and re-renders again

    // DRAGOVER DAY EVENT CHANGES STATE OF DRAG OVER SIZE, TO EVENT'S ATTEMPTED DROP CARD'S NUM
    // hook, state variable is dragOverSize
    // method is in the dragOver listener

    // WAY TO ACCURATELY DETECT dragOver's dragOverStartColumn
    // dragOver identifies distance of the left border of the dragged object from the left border of the day
    // variable distanceFromLeftBorder is that
    // dragOverStartColumn is distanceFromLeftBorder/HourColumnWidth, rounded to full number

    // HIGHLIGHTING ATTEMPTED DROP AREA
    //
    // DAY PASSES HOOK TO HOUR COLUMN, FOR UPDATING CURRENT STATE OF newAttemptedPeriodStartNum
    // it's initialized as ""

    // HOUR COLUMN LISTENS FOR DRAGOVER, ON DRAGOVER, IT TRIGGERS HOOK FOR UPDATING newAttemptedPeriodStartNum AND PASSES ITS NUMBER TO IT
    // in HourColumn is dragOver detection method
    // in that method is hook trigger and HourColumn's number is passed to it

    // PREP HOUR COLUMNS WITH isAvailable property
    // Day maps array of length 24
    // isAvailable variable is filtering availablePeriodsLeft for current number (from 24) and true/false based on whether it returns truthy/falsey
    // on each iteration, day returns HourColumn component
    // HourColumn receives props: num (from 24), isAvailable

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

    //// DAY CHECKS FOR MATCH - ATTEMPTED PERIOD vs AVAILABLE PERIODS LEFT
    // Day component receives props: dayScheduledCards, availablePeriodsLeft, day number, day name
    //// DAY DOES NOT ALLOW PASSING CARD STATE CHANGE UP UNLESS MATCH IS FOUND
    //

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
  return (
    <div className="App container h-screen box-border">
      <main className="flex">
          <Card
            id="card-1"
            draggable="true"
            text="Card one"
          />

        <Day id="Day-2" className="m-7 w-40 bg-gray-500 h-96">
          <Card
            id="card-2"
            draggable="true"
            text="Card two"
          />
        </Day>
      </main>
    </div>
  );
}

export default App;
