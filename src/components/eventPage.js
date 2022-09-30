import React from 'react';
import birthday from '../assetscss/Birthday cake.png';
import '../assetscss/Eventstyles.css';


const eventPage = () => {
  return (
    <div id="event-page">
      <section id="address">
      <h1>Birthday Bash</h1>
      <div id="birthday-date">
      <p>Hosted by <strong>Elysia</strong></p>
    <h3><b>from date </b>to date</h3>
      </div>
    <div id="event-location">
    <h3>Street name</h3>
    <p >Suburb, State, Postcode</p>
    </div>
      </section>
      <section>
      <img id="birthday-image" src={birthday} alt='birthday image' />
      </section>
    </div>
  )
}

export default eventPage;