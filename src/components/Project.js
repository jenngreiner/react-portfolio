import React from "react";

const styles = {
  img: {
    height: 150,
  },
  card: {
    width: "20rem",
  },
};

const Project = () => {
  return (
    <div className="container" id="portfolio">
      <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-xs-12 col-sm-10">
          <h1>Portfolio</h1>
          <div className="card-container">
            <div className="row">
              <div className="col-sm-4">
                <div className="card" style={styles.card}>
                  <img
                    src="./Assets/Images/pupstoplogo.png"
                    style={styles.img}
                    className="card-img-top"
                    alt="Who Said It?"
                  />
                  <div className="card-body">
                    <h5 className="card-title">PupStop</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a
                      href="https://pupstop.herokuapp.com/"
                      className="btn btn-primary"
                      id="btn-who-said-it"
                    >
                      See the app
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="card" style={styles.card}>
                  <img
                    src="./Assets/Images/02-WhoSaidIt.png"
                    className="card-img-top"
                    alt="Who Said It?"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Who Said It?</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a
                      href="https://justinwestmoreland.github.io/Who-Said-It/"
                      className="btn btn-primary"
                    >
                      See the app
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="card" style={styles.card}>
                  <img
                    src="./Assets/Images/team-builder.png"
                    className="card-img-top"
                    alt="Who Said It?"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Team Profile Generator</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a
                      href="https://jenngreiner.github.io/team-profile-generator-homework10/"
                      className="btn btn-primary"
                      id="btn-who-said-it"
                    >
                      See the app
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-1"></div>
      </div>
    </div>
  );
};

export default Project;
