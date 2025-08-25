import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-6">
          <img src={imageURL} alt=""></img>
        </div>
        <div className="col-6 p-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={tryDemo}>
              Try Demo&nbsp;
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href={learnMore} style={{ marginLeft: "50px" }}>
              Learn More&nbsp;
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img
                src="media\images\googlePlayBadge.svg"
                alt="googleplaystore"
              ></img>
            </a>
            <a href={appStore}>
              <img
                src="media\images\appstoreBadge.svg"
                alt="appstore"
                style={{ marginLeft: "50px" }}
              ></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
