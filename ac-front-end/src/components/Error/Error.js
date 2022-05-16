import React from "react";
import "../../styles/Error/Error.css";

function Error() {
  return (
    <div className="err-container">
      <h1 className="err-title">404</h1>
      <h2 className="err-subtitle">Not found</h2>
      <p className="err-description">
        The source requested could not be found on this server!
      </p>
    </div>
  );
}

export default Error;
