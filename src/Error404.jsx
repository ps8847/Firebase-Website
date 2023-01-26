import React from "react";
import { NavLink } from "react-router-dom";

const Error404 = () => {
  return (
    <>
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>404</h1>
          </div>
          <h2>We are sorry , page not found</h2>
          <p>
            The page your are looking for might have been removed had its name
            changed or is temperoraily unavailable
          </p>
          <NavLink to="/">Back to home Page </NavLink>
        </div>
      </div>
    </>
  );
};

export default Error404;
