import React from "react";
import "../styles/Reload.css";
function Reload() {
  const refresh = () => {
    window.location.reload();
  };
  return (
    <div className="button">
      <button onClick={refresh}>
        <span class="hoverable"></span>
      </button>
    </div>
  );
}

export default Reload;
