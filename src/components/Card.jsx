import React, { useState } from "react";
import "./Card.css"; // Import CSS

const Card = () => {
  const messages = [
    "Tell something About your Teacher",
    "Our Teacher Name is sir Tatheer",
    "HardWorking",
    "Handsome",
    "Kam age mai Mashallah buhut Ameer hai",
    "Punctuality",
  ];

  const [index, setIndex] = useState(0);
  const [badHabit, setBadHabit] = useState("");

  const handleClick = () => {
    setBadHabit("");
    setIndex((prevIndex) => (prevIndex + 1) % messages.length);
  };

  const Another = () => {
    setBadHabit("Mai nahi bataonga ");
  };

  return (
    <div className="card-container">
      <h1 className="card-text">{badHabit ? badHabit : messages[index]}</h1>

      <div className="btn-group">
        <button className="btn good-btn" onClick={handleClick}>
          Good Habits
        </button>
        <button className="btn bad-btn" onClick={Another}>
          Bad Habits
        </button>
      </div>
    </div>
  );
};

export default Card;
