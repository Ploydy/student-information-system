import React from "react";

export default function Home() {
  return(
    <>
    <section id="counts" className="counts section-bg">
          <div className="container">
            <div className="row counters">
              <div className="col-lg-3 col-6 text-center">
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={232}
                  data-purecounter-duration={1}
                  className="purecounter"
                />
                <p>Clients</p>
              </div>
              <div className="col-lg-3 col-6 text-center">
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={521}
                  data-purecounter-duration={1}
                  className="purecounter"
                />
                <p>Projects</p>
              </div>
              <div className="col-lg-3 col-6 text-center">
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={1463}
                  data-purecounter-duration={1}
                  className="purecounter"
                />
                <p>Hours Of Support</p>
              </div>
              <div className="col-lg-3 col-6 text-center">
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={15}
                  data-purecounter-duration={1}
                  className="purecounter"
                />
                <p>Hard Workers</p>
              </div>
            </div>
          </div>
        </section>
      

      <section id="pricing" className="pricing">
        <div className="container">
          <div className="section-title">
            <h2>Pricing</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="box">
                <h3>Free</h3>
                <h4>
                  <sup>$</sup>0<span> / month</span>
                </h4>
                <ul>
                  <li>Aida dere</li>
                  <li>Nec feugiat nisl</li>
                  <li>Nulla at volutpat dola</li>
                  <li className="na">Pharetra massa</li>
                  <li className="na">Massa ultricies mi</li>
                </ul>
                <div className="btn-wrap">
                  <a href="#" className="btn-buy">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-4 mt-md-0">
              <div className="box featured">
                <h3>Business</h3>
                <h4>
                  <sup>$</sup>19<span> / month</span>
                </h4>
                <ul>
                  <li>Aida dere</li>
                  <li>Nec feugiat nisl</li>
                  <li>Nulla at volutpat dola</li>
                  <li>Pharetra massa</li>
                  <li className="na">Massa ultricies mi</li>
                </ul>
                <div className="btn-wrap">
                  <a href="#" className="btn-buy">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
              <div className="box">
                <h3>Developer</h3>
                <h4>
                  <sup>$</sup>29<span> / month</span>
                </h4>
                <ul>
                  <li>Aida dere</li>
                  <li>Nec feugiat nisl</li>
                  <li>Nulla at volutpat dola</li>
                  <li>Pharetra massa</li>
                  <li>Massa ultricies mi</li>
                </ul>
                <div className="btn-wrap">
                  <a href="#" className="btn-buy">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
              <div className="box">
                <span className="advanced">Advanced</span>
                <h3>Ultimate</h3>
                <h4>
                  <sup>$</sup>49<span> / month</span>
                </h4>
                <ul>
                  <li>Aida dere</li>
                  <li>Nec feugiat nisl</li>
                  <li>Nulla at volutpat dola</li>
                  <li>Pharetra massa</li>
                  <li>Massa ultricies mi</li>
                </ul>
                <div className="btn-wrap">
                  <a href="#" className="btn-buy">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
  );
}