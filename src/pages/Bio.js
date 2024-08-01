import React from "react";


const Bio = () => {
  return (
    <div className="container" id="about-me">
      <div class="bio">
        {/* <img
          src={`${process.env.PUBLIC_URL}/Images/headshot.jpg`}
          className="img"
          alt="Jenn Greiner headshot"
        /> */}
        <h2>Hi, my name is</h2>
        <h1>Jenn Greiner</h1>
        <h3>
          I'm a <b>User Interface Engineer</b> specialized in building exceptional digital experiences.
        </h3>
      </div>
    </div>
  );
};

export default Bio;
