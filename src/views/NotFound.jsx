import React from "react";
import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle";

const NotFound = () => {
  return (
    <>
      <PageTitle title="404" />
      {/* End page title for seo */}

      <div className="not-found-wrapper">
        <div className="leftpart">
          <div className="leftpart_inner">
            <div className="logo">
              <Link className="navbar-brand" to="/">
                <img src={`${process.env.PUBLIC_URL}/assets/img/logo/dark.png`} alt="brand" />
              </Link>
            </div>
            {/* END LOGO */}
            <div className="copyright">
              <p>
                &copy; {new Date().getFullYear()} Leo Thomas <br /> Created by
                <a
                  href="https://www.linkedin.com/in/jean-camacho-126126212/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Jean Camacho - Fullstack Developer
                </a>
              </p>
            </div>
            {/* END COPYRIGHT */}
          </div>
        </div>
        {/* END LEFT PART */}

        <div className="rightpart">
          <div className="rightpart_in">
            <div className="tokyo_tm_section">
              <div className="container">
                <div className="tokyo_tm_error">
                  <div className="tokyo_tm_error_inner">
                    <h1>404!</h1>
                    <h3>Page not found</h3>
                    <p>The page you were looking for could not be found.</p>
                    <Link to="/" className="ib-button">
                      Go to Home
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* END RIGHT PART */}

        <footer className="footer-wrapper">
          <div className="copyright">
            <p>
              &copy; {new Date().getFullYear()} Leo Thomas <br /> Created by
              <a
                href="https://www.linkedin.com/in/jean-camacho-126126212/"
                target="_blank"
                rel="noreferrer"
              >
                Jean Camacho - Fullstack Developer
              </a>
            </p>
          </div>
          {/* END COPYRIGHT */}
        </footer>
      </div>
    </>
  );
};

export default NotFound;
