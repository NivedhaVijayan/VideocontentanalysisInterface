// src/components/TimestampDisplay.js
import React from 'react';

const TimestampDisplay = ({ keyphrases, onTimestampClick }) => {
  return (
    <div>
      <h2>Timestamp Display</h2>
      <ul>
        {keyphrases.map((keyphrase, index) => (
          <li key={index}>
            <button onClick={() => onTimestampClick(keyphrase.timestamp)}>
              {keyphrase.keyword} - {keyphrase.timestamp}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimestampDisplay;
