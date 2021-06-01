import React from "react";

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-sm-5"></div>
          <div className="col-sm-2">
            <div className="row">
              <div className="col-4">
                <a href="https://www.instagram.com/two.denver.dogs/">
                  <img
                    src={`${process.env.PUBLIC_URL}/icons/Instagram_201409.png`}
                    className="icon"
                    id="email"
                    alt="Instagram Logo"
                  />
                </a>
              </div>
              <div className="col-4">
                <a href="https://www.linkedin.com/in/jennifer-greiner/">
                  <img
                    src={`${process.env.PUBLIC_URL}/icons/Linkedin_201409.png`}
                    className="icon"
                    id="linkedin"
                    alt="LinkeIn Logo"
                  />
                </a>
              </div>
              <div className="col-4">
                <a href="https://github.com/jenngreiner">
                  <img
                    src={`${process.env.PUBLIC_URL}/icons/github_201409.png`}
                    className="icon"
                    id="github"
                    alt="GitHub Logo"
                  />
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
