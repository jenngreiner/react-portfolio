import React from "react";


const Bio = () => {
  return (
    <main className="flex-shrink-0">
      <div className="container" id="about-me">
        <br />
        <div className="row">
          <div className="col-sm-3"></div>
          <div className="col-xs-12 col-sm-6" id="about-me">
            <img
              src={`${process.env.PUBLIC_URL}/Images/headshot.jpg`}
              className="img"
              alt="Jenn Greiner headshot"
            />
            <br />
            <h1>Hi, I'm Jenn</h1>
            <h2>Full-stack web developer.</h2>
          </div>
          <div className="col-sm-3"></div>
        </div>
        <div className="col-sm-2"></div>
      </div>
    </main>
  );
};

export default Bio;
