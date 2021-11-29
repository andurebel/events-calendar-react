import { useState } from "react";
import "./NewEventForm.css";
import { AiOutlineClose } from "react-icons/ai";

export default function NewEventForm({ addEvent, closeModal }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("Bucuresti");

  const resetForm = () => {
    setTitle("");
    setDate("");
    setLocation("Bucuresti");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const event = {
      title: title,
      date: date,
      location: location,
      id: Math.floor(Math.random() * 10000),
    };
    addEvent(event);
    resetForm();
  };

  return (
    <form className="new-event-form" onSubmit={handleSubmit}>
      <div className="close__button">
        <AiOutlineClose onClick={closeModal} />
      </div>
      <label>
        <span>Event Title:</span>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </label>
      <label>
        <span>Event Date:</span>
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </label>
      <label>
        <span>Event location :</span>
        <select
          onChange={(event) => {
            setLocation(event.target.value);
          }}
        >
          <option value="Bucuresti">Bucuresti</option>
          <option value="Constanta">Constanta</option>
          <option value="Pitesti">Pitesti</option>
        </select>
      </label>
      <button>Submit</button>
    </form>
  );
}
