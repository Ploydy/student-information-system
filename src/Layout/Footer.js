import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer id="footer">
          <div className="footer-top">
            <div className="container">
              
            </div>
          </div>
          <div className="container d-md-flex py-4">
            <div className="me-md-auto text-center text-md-start">
              <div className="copyright">
                © Copyright{" "}
                <strong>
                  <span>School</span>
                </strong>
                . All Rights Reserved
              </div>
              <div className="credits">
                {/* All the links in the footer should remain intact. */}
                {/* You can delete the links only if you purchased the pro version. */}
                {/* Licensing information: https://bootstrapmade.com/license/ */}
                {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/baker-free-onepage-bootstrap-theme/ */}
                Designed by{" "}
                <a href="https://bootstrapmade.com/">BootstrapMade</a>
              </div>
            </div>
            <div className="social-links text-center text-md-right pt-3 pt-md-0">
              <Link to ="#" className="twitter">
                <i className="bx bxl-twitter" />
              </Link>
              <Link to="#" className="facebook">
                <i className="bx bxl-facebook" />
              </Link>
              <Link to="#" className="instagram">
                <i className="bx bxl-instagram" />
              </Link>
              <Link to="#" className="google-plus">
                <i className="bx bxl-skype" />
              </Link>
              <Link to="#" className="linkedin">
                <i className="bx bxl-linkedin" />
              </Link>
            </div>
          </div>
        </footer>
  );
}
