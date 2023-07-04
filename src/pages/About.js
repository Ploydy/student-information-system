import React from "react";

export default function About() {
  return (
    <>
      <section id="about" className="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src="assets/img/about.jpg" className="img-fluid" alt="" />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0">
              <h3>Voluptatem dignissimos provident quasi</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
                aute irure dolor in reprehenderit
              </p>
              <div className="row">
                <div className="col-md-6">
                  <i className="bx bx-receipt" />
                  <h4>Corporis voluptates sit</h4>
                  <p>
                    Consequuntur sunt aut quasi enim aliquam quae harum pariatur
                    laboris nisi ut aliquip
                  </p>
                </div>
                <div className="col-md-6">
                  <i className="bx bx-cube-alt" />
                  <h4>Ullamco laboris nisi</h4>
                  <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
        
    </>
  );
}
