import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="#" style={{ textDecoration: "none" }}>
          Track Tickets
        </a>
      </div>

      <div className="row p-3 m-2">
        <div className="col-4 p-2">
          <h1 className="fs-3 support-header">
            Search for an answer or browser help topics to create a ticket
          </h1>
          <input
            className="sp-portal-inp"
            placeholder="Eg: How do I open my account, How do I activate F&O..."
          ></input>
        </div>

        <div className="col-4 p-2">
          <h3 className="support-quick">Quick Links</h3>
          <ol className="quick-ol-li">
            <li>
              <a href="#">Track account opening</a>
            </li>
            <li>
              <a href="#"> Track segment activation</a>
            </li>
            <li>
              <a href="#">Intraday margins</a>
            </li>
            <li>
              <a href="#">Kite user manual</a>
            </li>
          </ol>
        </div>

        <div className="col-4 p-2">
          <h1 className="fs-3 support-featured">Featured</h1>
          <ol className="featured-ol-li">
            <li>
              <a href="#">Current Takeovers and Delisting</a>
            </li>
            <li>
              <a href="#">Track segment activation</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
