import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 text-left ticket-header">
          To create a ticket, please select a relevant topic
        </h1>
        <div className="col-4 p-5 mt-2 mb-1 support-links">
          <h4 className="fs-4">
            <i class="fa fa-plus-circle support-icons" aria-hidden="true"></i>
            Account Opening
          </h4>
          <ul>
            <li>
              <a href="#">Resident individual</a>
            </li>
            <li>
              <a href="#">Minor</a>
            </li>
            <li>
              <a href="#">Non Resident Indian (NRI)</a>
            </li>
            <li>
              <a href="#">Company, Partnership, HUF and LLP</a>
            </li>
            <li>
              <a href="#">Glossary</a>
            </li>
          </ul>
        </div>

        <div className="col-4 p-5 mt-2 mb-1 support-links">
          <h4 className="fs-4">
            <i class="fa fa-user support-icons" aria-hidden="true"></i>
            Your Zerodha Account
          </h4>
          <ul>
            <li>
              <a href="#">Your Profile</a>
            </li>
            <li>
              <a href="#">Account Modification</a>
            </li>
            <li>
              <a href="#">
                Client Master Report (CMR) and Depository Participant (DP)
              </a>
            </li>
            <li>
              <a href="#">Nomination</a>
            </li>
            <li>
              <a href="#">Transfer and conversion of securities</a>
            </li>
          </ul>
        </div>

        <div className="col-4 p-5 mt-2 mb-1 support-links">
          <h4 className="fs-4">
            <i
              class="fa fa-circle-o-notch support-icons"
              aria-hidden="true"
            ></i>
            Kite
          </h4>
          <ul>
            <li>
              <a href="#">IPO</a>
            </li>
            <li>
              <a href="#">Trading FAQs</a>
            </li>
            <li>
              <a href="#">Margin Trading Facility (MTF) and Margins</a>
            </li>
            <li>
              <a href="#">Charts and Orders</a>
            </li>
            <li>
              <a href="#">Alerts and Nudges</a>
            </li>
            <li>
              <a href="#">General</a>
            </li>
          </ul>
        </div>

        <div className="col-4 p-5 mt-2 mb-1 support-links">
          <h4 className="fs-4">
            <i class="fa fa-inr support-icons" aria-hidden="true"></i>
            Funds
          </h4>
          <ul>
            <li>
              <a href="#">Add money</a>
            </li>
            <li>
              <a href="#">Withdraw money</a>
            </li>
            <li>
              <a href="#">Add bank accounts</a>
            </li>
            <li>
              <a href="#">eMandates</a>
            </li>
          </ul>
        </div>

        <div className="col-4 p-5 mt-2 mb-1 support-links">
          <h4 className="fs-4">
            <i class="fa fa-user support-icons" aria-hidden="true"></i>
            Console
          </h4>
          <ul>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Corporate actions</a>
            </li>
            <li>
              <a href="#">Funds statement</a>
            </li>
            <li>
              <a href="#">Reports</a>
            </li>
            <li>
              <a href="#">Profile</a>
            </li>
            <li>
              <a href="#">Segments</a>
            </li>
          </ul>
        </div>

        <div className="col-4 p-5 mt-2 mb-1 support-links">
          <h4 className="fs-4">
            <i
              class="fa fa-check-circle-o support-icons"
              aria-hidden="true"
            ></i>
            Coin
          </h4>
          <ul>
            <li>
              <a href="#">Mutual Funds</a>
            </li>
            <li>
              <a href="#">National Pension Scheme (NPS)</a>
            </li>
            <li>
              <a href="#">FIxed Deposit (FD)</a>
            </li>
            <li>
              <a href="#">Features on Coin</a>
            </li>
            <li>
              <a href="#">Payments and Orders</a>
            </li>
            <li>
              <a href="#">General</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
