import React from 'react';
import {Link} from 'react-router-dom';
import landing from '../assetscss/Landing page image.svg';

const landingPage = () => {
  return (
    <div id="landing-page">
      <section>
        <img id='landing-img' src={landing} alt='landing page' />
      </section>
      <section id="content-section">
        <h1 id="heading"><span id="first-line">Imagine if</span><br/> Snapchat<br/> had events.</h1>
        <p id="description">Easily host and share events with your friends<br/> across any social media.</p>
        <Link to="/create" href="#">
        <button id="create-event">Create my event</button>
        </Link>
        
      </section>

    </div>
  )
}

export default landingPage