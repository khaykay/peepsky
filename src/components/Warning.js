import React from "react";

import "../styles/Warning.css";

function Warning() {
  return (
    <div className="Warning">
      <h2> No location found </h2>
      <p>Enter text in this format: city/town and state/country</p>
      <p> Ex: Kubwa, Abuja</p>
      <p> Ex: Awka, Anambra</p>
    </div>
  );
}

export default Warning;
