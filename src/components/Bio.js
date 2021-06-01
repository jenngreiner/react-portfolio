import React from "react";

const Bio = () => {
  return (
    <main class="flex-shrink-0">
      <div class="container" id="about-me">
        <br />
        <div class="row">
          <div class="col-sm-3"></div>
          <div class="col-xs-12 col-sm-6" id="about-me">
            <img
              src="./Assets/Images/headshot.jpg"
              class="img"
              alt="Jenn Greiner headshot"
            />
            <br />
            <h1>Hi, I'm Jenn</h1>
            <h2>Full-stack web developer.</h2>
          </div>
          <div class="col-sm-3"></div>
        </div>
        <div class="col-sm-2"></div>
      </div>
    </main>
  );
};

export default Bio;
