import "./App.css";
import React, { useState } from "react";
import Title from "./components/Title";
import Modal from "./components/Modal";
import EventList from "./components/EventList";
import NewEventForm from "./components/NewEventForm";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([
    // { title: "Take out the trash", id: 1 },
    // { title: "Do some shopping", id: 2 },
    // { title: "Feed the dog", id: 3 },
  ]);

  const addEvent = (event) => {
    setEvents((previousEvents) => {
      return [...previousEvents, event];
    });
    setShowModal(false);
  };

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => id !== event.id);
    });
  };

  const subtitle = "These are the next events in your calendar";

  return (
    <div className="App">
      <Title title="My events calendar" subtitle={subtitle} />

      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>Hide Events</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>Show Events</button>
        </div>
      )}
      {showEvents && <EventList events={events} handleClick={handleClick} />}

      {showModal && (
        <Modal>
          <NewEventForm addEvent={addEvent} />
        </Modal>
      )}

      <div>
        <button onClick={() => setShowModal(true)}>Add New Event</button>
      </div>
    </div>
  );
}

export default App;
