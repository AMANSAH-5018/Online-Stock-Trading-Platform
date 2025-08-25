import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center border-top">
        <div className="col-4 p-4">
          <h1>Equity</h1>
        </div>
        <div className="col-4 p-4">
          <h1>Currency</h1>
        </div>
        <div className="col-4 p-4">
          <h1>Commodity</h1>
        </div>
      </div>
      <h3 className="text-center fs-4 text-muted">
        <a href="" style={{ textDecoration: "none", fontWeight: "400" }}>
          Calculate your costs upfront
        </a>
        using our brokerage calculator
      </h3>

      <div class="container mt-5">
        <h3 class="section-header">Charges for account opening</h3>
        <div class="card">
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-borderless table-custom mb-0">
                <thead>
                  <tr>
                    <th scope="col">Type of account</th>
                    <th scope="col" class="text-center">
                      Charges
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Online account</th>
                    <td>
                      <span class="badge-free">FREE</span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Offline account</th>
                    <td>
                      <span class="badge-free">FREE</span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">NRI account (offline only)</th>
                    <td>₹ 500</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      Partnership, LLP, HUF, or Corporate accounts (offline
                      only)
                    </th>
                    <td>₹ 500</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div class="container mt-5">
        <h3 class="section-header">Demat AMC (Annual Maintenance Charge)</h3>
        <div class="card">
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-borderless table-custom mb-0">
                <thead>
                  <tr>
                    <th scope="col">Value of holdings</th>
                    <th scope="col" class="text-center">
                      AMC
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Up to ₹4 lakh</th>
                    <td>
                      <span class="badge-free">FREE</span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">₹4 lakh - ₹10 lakh</th>
                    <td>₹ 100 per year, charged quarterly*</td>
                  </tr>
                  <tr>
                    <th scope="row">Above ₹10 lakh</th>
                    <td>₹ 300 per year, charged quartlerly</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div class="container mt-5">
        <h3 class="section-header">
          Charges for optional value added services
        </h3>
        <div class="card">
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-borderless table-custom mb-0">
                <thead>
                  <tr className="tr-head">
                    <th scope="col" className="text">
                      Service
                    </th>
                    <th scope="col">Billing Frequency</th>
                    <th scope="col">Charges</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Tickertape</th>
                    <td>Monthly / Annual</td>
                    <td>Free: 0 | Pro: 249/2399</td>
                  </tr>
                  <tr>
                    <th scope="row">Smallcase</th>
                    <td>Per transaction</td>
                    <td>Buy & Invest More: 100 | SIP: 10</td>
                  </tr>
                  <tr>
                    <th scope="row">Kite Connect</th>
                    <td>Monthly</td>
                    <td>Connect: 500</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
