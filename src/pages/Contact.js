import React from "react";
import PageTitle from "../components/PageTitle";

const Contact = () => {
  return (
      <div className="container" id="contact-me">
        <div className="row">
          <div className="col-xs-12 justify-content-center">
            <PageTitle title="Contact Me"/>
            <iframe
              title="Contact form"
              src="https://docs.google.com/forms/d/e/1FAIpQLSftD4F3y766xtqBARqLiNt_SkqPTFGG2wWT3KF4Pz6OrocpMA/viewform?embedded=true"
              width="640"
              height="940"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
  );
};

export default Contact;
