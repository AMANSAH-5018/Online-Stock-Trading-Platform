const axios = require("axios");
const fs = require("fs");
const url =
    "https://indian-market-stock-api.onrender.com/api/portfolio/tcs?exchange=NSE";
const options = { method: "GET" };

fetch(url, options)
    .then((response) => {
        // Check if the response is JSON based on its content-type header
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
            return response.json();
        }
        // If not JSON, read and return the response as plain text
        return response.text();
    })
    .then((data) => {
        console.log("Response from server:", data);
    })
    .catch((error) => console.error("Error:", error));