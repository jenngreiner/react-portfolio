import React from "react";

const Contact = () => {
  return (
    <main className="flex-shrink-0">
      <div className="container" id="contact-me">
        <div className="row">
          <div className="col-sm-3"></div>
          <div className="col-xs-12 col-sm-6">
            <header>
              <h1>Contact Me</h1>
            </header>
            <hr />
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSftD4F3y766xtqBARqLiNt_SkqPTFGG2wWT3KF4Pz6OrocpMA/viewform?embedded=true"
              width="640"
              height="940"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
            >
              Loading…
            </iframe>
          </div>
          <div className="col-sm-3"></div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
