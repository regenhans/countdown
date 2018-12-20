import React from 'react';
import './styles/greetings.css';

export default function Greetings() {
  return (
    <div className="greetingsContainer">
    <h1>Hello!</h1>
    <br/>
    <p>This is an countdown component written using React JS. It takes a date with and calculates the difference between the date and time provided and now.
    </p>
    <br/>
    <h2>Constraints</h2>
    <br/>
    <ul>
      <li>If the date is past at the moment of the component mount it will not display the counter and ask for a valid
      date</li>
      <li>
      If there is no date provided it will display the same message til a valid date is provided
      </li>
      <li>The component is designed to be agnostic of the use case. In this scenario we are using a date and time input selector to pass the date and time but it can be used without this only passing a valid date/time as props</li>
    </ul>
    </div>
  );
}
