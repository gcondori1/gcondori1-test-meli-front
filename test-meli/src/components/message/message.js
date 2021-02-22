import React from 'react';
import './message.sass';

export default function Message({ msg }) {
  return (
    <div className="MessageContainer">
      <p className="Oops"> Oops!</p>
      {msg}
    </div>
  );
}
