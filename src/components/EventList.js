import React from "react";
import styles from "./EventList.module.css";

export default function EventList({ events, handleClick }) {
  return (
    <div>
      {events.map((event, index) => (
        <div className={styles.card} key={event.id}>
          <h2>
            {index + 1} - {event.title}
          </h2>
          <p>
            {event.location} - {event.date}
          </p>
          <button onClick={() => handleClick(event.id)}>Delete event</button>
        </div>
      ))}
    </div>
  );
}
