import React from "react";
import "../App.css";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>OOps! An Error Occurred.</h1>
      {error && <p>{error.data}</p>}
      <Link to="/">
        <button>Go Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
