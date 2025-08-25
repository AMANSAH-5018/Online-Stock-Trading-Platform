import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-3">
        <h1 className="text-center">People</h1>
      </div>

      <div className="row p-5" style={{ lineHeight: "1.7", fontSize: "17px" }}>
        <div className="col-6 p-5 text-center text-muted">
          <img
            src="media\images\nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "55%" }}
          ></img>
          <h4 className="mt-4">Nitin Kamath</h4>
          <h6 className="mt-4">Founder, CEO</h6>
        </div>
        <div className="fs-5 col-6 p-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p className="nitinPara">
            Connect on&nbsp;<a href="">Homepage</a>&nbsp;/&nbsp;
            <a href="">TradingQnA</a>&nbsp;/&nbsp;<a href="">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
