import React from 'react';
import {Link} from 'react-router-dom';
import '../assetscss/Createform.css';

const Create = () => {
  return (
    <div id="input-form">
      <h1>Schedule Event</h1>
      <form className="form">
        <label>Event name</label><br />
        <input type="text" placeholder="Enter your event name" /><br />
        <label>Host name</label><br />
        <input type="text" placeholder="Enter your host name" /><br />
        <label>Start Date</label><br />
        <input type="date" /><br />
        <label>End Date</label><br />
        <input type="date" /><br />
        <label>Location</label><br />
        <input type="text" placeholder="Enter your city" /><br />
        <label>Photo</label><br />
        <input type='file' /><br />
        <Link to = "/eventpage" href="#">
        <input type="submit" value="Next"/>
        </Link>
        
      </form>



    </div>
  )
}

export default Create