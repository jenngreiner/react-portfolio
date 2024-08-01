import React from "react";

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 sticky">
      <div className="container">
        <div className="row">
          <div className="col-sm-5"></div>
          <div className="col-sm-2">
            <div className="row">
              <div className="col-4">
                <a href="https://www.instagram.com/two.denver.dogs/">
                  chat with me
                </a>
              </div>
              <div className="col-4">
                <a href="https://www.linkedin.com/in/jennifer-greiner/">
                  connect with me
                </a>
              </div>
              <div className="col-4">
                <a href="https://github.com/jenngreiner">
                  develop with me
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-5"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
